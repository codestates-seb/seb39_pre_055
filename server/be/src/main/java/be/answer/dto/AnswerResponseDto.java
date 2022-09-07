package be.answer.dto;

import be.answer.entity.Answer;
import be.user.dto.UserResponseDto;
import be.user.entity.User;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerResponseDto {
    private long answerId;
    private Answer.AnswerStatus answerStatus;
    private String body;
    private int vote;
    private UserResponseDto user;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;


}
