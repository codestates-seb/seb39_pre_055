package be.question.mapper;
import be.answer.dto.AnswerResponseDto;
import be.answer.entity.Answer;
import be.answer.mapper.AnswerMapper;
import be.answer.service.AnswerService;
import be.exception.BusinessLogicException;
import be.exception.ExceptionCode;
import be.question.dto.*;
import be.question.entity.Question;
import be.question.entity.QuestionTag;
import be.question.service.QuestionService;
import be.response.MultiResponseDto;
import be.user.entity.User;
import be.user.mapper.UserMapper;
import be.user.service.UserService;
import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    default Question questionPostDtoToQuestion(UserService userService,
                                               QuestionPostDto questionPostDto){
        Question question = new Question();

        question.setVote(0);
        question.setView(0);

        // changing from QuestionTagDto to QuestionTag
        List<QuestionTag> questionTags =questionTagsDtosToQuestionTags(questionPostDto.getQuestionTags(),question);
//        List<QuestionTag> questionTags = questionPostDto.getQuestionTags()
//                .stream().map(questionTagDto -> {
//                    QuestionTag questionTag = new QuestionTag();
//                questionTag.addQuestion(question);
//                questionTag.setTagName(questionTagDto.getTagName());
//                return questionTag;
//                }).collect(Collectors.toList());

        question.setQuestionTags(questionTags);

        question.setBody(questionPostDto.getBody());
        question.setTitle(questionPostDto.getTitle());

        question.setUser( // 현재 로그인한 토큰으로 유저정보 불러옴
                userService.getLoginUser());

        return question;
    }

    default List<QuestionTag> questionTagsDtosToQuestionTags(List<QuestionTagDto> questionTagsDtos,Question question){
        // changing from QuestionTagDto to QuestionTag
        return questionTagsDtos.stream().map(questionTagDto -> {
            QuestionTag questionTag = new QuestionTag();
            questionTag.addQuestion(question);
            questionTag.setTagName(questionTagDto.getTagName());
            return questionTag;
        }).collect(Collectors.toList());
    }

    default  Question questionPatchDtoToQuestion(QuestionService questionService,UserService userService, QuestionPatchDto questionPatchDto){
        if(userService.getLoginUser().getUserId()!= questionService.findQuestionUser(questionPatchDto.getQuestionId()).getUserId()){ //해당 유저가 쓴 글 아니므로 수정 삭제 불가
            throw new BusinessLogicException(ExceptionCode.ACCESS_DENIED_USER);
        }
        Question question = new Question();
        question.setQuestionId(questionPatchDto.getQuestionId());

        // changing from QuestionTagDto to QuestionTag

        if(questionPatchDto.getQuestionTags()==null){
            questionPatchDto.setQuestionTags(new ArrayList<>());
        }
        List<QuestionTag> questionTags =questionTagsDtosToQuestionTags(questionPatchDto.getQuestionTags(),question);
        question.setQuestionTags(questionTags);
        System.out.println(questionTags);
        question.setBody(questionPatchDto.getBody());
        question.setTitle(questionPatchDto.getTitle());
        question.setQuestionStatus(questionPatchDto.getQuestionStatus());

        return question;
    }

    default QuestionResponseDto questionToQuestionResponseDto(UserMapper userMapper, Question question){
        List<QuestionTag> questionTags = question.getQuestionTags();

        QuestionResponseDto questionResponseDto = new QuestionResponseDto();
        questionResponseDto.setQuestionId(question.getQuestionId());
        questionResponseDto.setQuestionStatus(question.getQuestionStatus());
        questionResponseDto.setTitle(question.getTitle());
        questionResponseDto.setBody(question.getBody());
        questionResponseDto.setVote(question.getVote());
        questionResponseDto.setView(question.getView());

        User user = question.getUser();//질문 작성자 속성 추가
        questionResponseDto.setUser(userMapper.userToUserResponseDto(user));//질문 작성자 속성 추가

        questionResponseDto.setQuestionTags(questionTagsToQuestionTagResponseDtos(//질문에 대한 태그 속성 추가
                question.getQuestionTags()
        ));

        questionResponseDto.setCreatedAt(question.getCreatedAt());
        questionResponseDto.setUpdatedAt(question.getUpdatedAt());

        return questionResponseDto;


    }

    List<QuestionResponseDto> questionsToQuestionResponseDtos(List <Question> questions);

    default QuestionAndAnswerResponseDto questionToQuestionAndAnswerResponseDto(AnswerService answerService, AnswerMapper answerMapper,
                                                                                UserMapper userMapper, Question question, Integer answerPage, Integer answerSize,
                                                                                String answerSort){

        QuestionAndAnswerResponseDto questionAndAnswerResponseDto = new QuestionAndAnswerResponseDto();
        questionAndAnswerResponseDto.setQuestionId(question.getQuestionId());
        questionAndAnswerResponseDto.setQuestionStatus(question.getQuestionStatus());
        questionAndAnswerResponseDto.setTitle(question.getTitle());
        questionAndAnswerResponseDto.setBody(question.getBody());
        questionAndAnswerResponseDto.setVote(question.getVote());
        questionAndAnswerResponseDto.setView(question.getView());

        User user = question.getUser(); //질문 작성자 속성 추가
        questionAndAnswerResponseDto.setUser(userMapper.userToUserResponseDto(user));//질문 작성자 속성 추가

        questionAndAnswerResponseDto.setQuestionTags(questionTagsToQuestionTagResponseDtos( //질문에 대한 태그 속성 추가
                question.getQuestionTags()
        ));

        questionAndAnswerResponseDto.setCreatedAt(question.getCreatedAt());
        questionAndAnswerResponseDto.setUpdatedAt(question.getUpdatedAt());

        try{
            Page<Answer> pageAnswers = answerService.findAnswers(
                    question,answerPage,answerSize,answerSort); // 해당 question에 해당하는 answer의 sort 와 pagenation 결과를 가져온다.
            List<Answer> answers = pageAnswers.getContent();
//        questionAndAnswerResponseDto.setAnswers(new MultiResponseDto<>(
//                answerMapper.answersToAnswerResponseDtos(userMapper,answers), pageAnswers));
            questionAndAnswerResponseDto.setAnswers(new MultiResponseDto<>(
                    answerMapper.answersToAnswerResponseDtos(answers), pageAnswers));
        }catch(BusinessLogicException e){

        }


        return questionAndAnswerResponseDto;


    }



    // changing from QuestionTag to QuestionTagResponseDto
    default List<QuestionTagResponseDto> questionTagsToQuestionTagResponseDtos(
            List<QuestionTag> questionTags) {
//        return questionTags
//                .stream()
//                .map(questionTag -> QuestionTagResponseDto
//                        .builder()
//                        .tagName(questionTag.getTagName())
//                        .build())
//                .collect(Collectors.toList());
        return questionTags
                .stream()
                .map(questionTag -> QuestionTagResponseDto
                        .builder()
                        .tagName(questionTag.getTagName())
                        .build())
                .collect(Collectors.toList());
    }

}
