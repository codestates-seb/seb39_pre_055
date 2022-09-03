package be.answer.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
public class AnswerPostDto {
    @Positive
    @NotNull
    private Long questionId;

    @NotBlank(message = "답변 내용을 적어주세요")
    private String body;
}
