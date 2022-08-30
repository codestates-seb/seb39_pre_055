package be.question.mapper;
import be.question.dto.QuestionPostDto;
import be.question.dto.QuestionResponseDto;
import be.question.dto.QuestionTagResponseDto;
import be.question.entity.Question;
import be.question.entity.QuestionTag;
import be.user.service.UserService;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    default Question questionPostDtoToQuestion(UserService userService,
                                               QuestionPostDto questionPostDto){
        Question question = new Question();

        question.setVote(0);
        question.setView(0);

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

    default QuestionResponseDto questionToQuestionResponseDto(Question question){
        List<QuestionTag> questionTags = question.getQuestionTags();

        QuestionResponseDto questionResponseDto = new QuestionResponseDto();
        questionResponseDto.setQuestionId(question.getQuestionId());
        questionResponseDto.setQuestionStatus(question.getQuestionStatus());
        questionResponseDto.setTitle(question.getTitle());
        questionResponseDto.setBody(question.getBody());
        questionResponseDto.setVote(question.getVote());
        questionResponseDto.setView(question.getView());
        questionResponseDto.setUserId(question.getUser().getUserId());
        questionResponseDto.setQuestionTags(questionTagsToQuestionTagResponseDtos(
                question.getQuestionTags()
        ));

        return questionResponseDto;


    }

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
