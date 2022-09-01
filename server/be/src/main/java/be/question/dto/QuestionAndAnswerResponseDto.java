package be.question.dto;

import be.answer.dto.AnswerResponseDto;
import be.question.entity.Question;
import be.response.MultiResponseDto;
import be.user.dto.UserResponseDto;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class QuestionAndAnswerResponseDto {

    private Long questionId;
    private Question.QuestionStatus questionStatus;
    private String title;
    private String body;
    private int vote;
    private int view;
    private UserResponseDto user;
    private MultiResponseDto<AnswerResponseDto> answers;
    private List<QuestionTagResponseDto> questionTags;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
