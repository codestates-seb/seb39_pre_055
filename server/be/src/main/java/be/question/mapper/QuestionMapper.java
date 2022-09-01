package be.question.mapper;
import be.answer.dto.AnswerResponseDto;
import be.answer.entity.Answer;
import be.answer.mapper.AnswerMapper;
import be.answer.service.AnswerService;
import be.question.dto.QuestionAndAnswerResponseDto;
import be.question.dto.QuestionPostDto;
import be.question.dto.QuestionResponseDto;
import be.question.dto.QuestionTagResponseDto;
import be.question.entity.Question;
import be.question.entity.QuestionTag;
import be.response.MultiResponseDto;
import be.user.entity.User;
import be.user.mapper.UserMapper;
import be.user.service.UserService;
import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;

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
        List<QuestionTag> questionTags = questionPostDto.getQuestionTags()
                .stream().map(questionTagDto -> {
                    QuestionTag questionTag = new QuestionTag();
                questionTag.addQuestion(question);
                questionTag.setTagName(questionTagDto.getTagName());
                return questionTag;
                }).collect(Collectors.toList());

        question.setQuestionTags(questionTags);

        question.setBody(questionPostDto.getBody());
        question.setTitle(questionPostDto.getTitle());
        question.setUser(userService.findUser(  //questionPostDto에 입력받은 userId에 해당하는 User 객체 불러옴
                questionPostDto.getUserId()
        ));

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

        User user = question.getUser();
        questionResponseDto.setUser(userMapper.userToUserResponseDto(user));
        questionResponseDto.setQuestionTags(questionTagsToQuestionTagResponseDtos(
                question.getQuestionTags()
        ));

        questionResponseDto.setCreatedAt(question.getCreatedAt());
        questionResponseDto.setUpdatedAt(question.getUpdatedAt());

        return questionResponseDto;


    }

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

        User user = question.getUser();
        questionAndAnswerResponseDto.setUser(userMapper.userToUserResponseDto(user));
        questionAndAnswerResponseDto.setQuestionTags(questionTagsToQuestionTagResponseDtos(
                question.getQuestionTags()
        ));

        questionAndAnswerResponseDto.setCreatedAt(question.getCreatedAt());
        questionAndAnswerResponseDto.setUpdatedAt(question.getUpdatedAt());

        Page<Answer> pageAnswers = answerService.findAnswers(
                question,answerPage,answerSize,answerSort); // 해당 question에 해당하는 answer의 sort 와 pagenation 결과를 가져온다.
        List<Answer> answers = pageAnswers.getContent();
//        questionAndAnswerResponseDto.setAnswers(new MultiResponseDto<>(
//                answerMapper.answersToAnswerResponseDtos(userMapper,answers), pageAnswers));
        questionAndAnswerResponseDto.setAnswers(new MultiResponseDto<>(
                answerMapper.answersToAnswerResponseDtos(answers), pageAnswers));

        return questionAndAnswerResponseDto;


    }

    List<QuestionResponseDto> questionsToQuestionResponseDtos(List <Question> questions);

    // changing from QuestionTag to QuestionTagResponseDto
    default List<QuestionTagResponseDto> questionTagsToQuestionTagResponseDtos(
            List<QuestionTag> questionTags) {
        return questionTags
                .stream()
                .map(questionTag -> QuestionTagResponseDto
                        .builder()
                        .tagName(questionTag.getTagName())
                        .build())
                .collect(Collectors.toList());
    }

}
