package be.question.dto;

import be.question.entity.Question;
import be.question.entity.QuestionTag;
import be.user.dto.UserResponseDto;
import be.user.entity.User;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class QuestionResponseDto {

    private Long questionId;
    private Question.QuestionStatus questionStatus;
    private String title;
    private String body;
    private int vote;
    private int view;
    private UserResponseDto user;
    private List<QuestionTagResponseDto> questionTags;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;


}
