package be.question.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.List;

@Getter
public class QuestionPostDto {

    @Positive
    private Long questionId;

//    @NotNull(message = "유저Id를 적어주세요")
//    @Positive
//    private Long userId;

    @NotBlank(message = "질문 제목을 적어주세요")
    private String title;

    @NotBlank(message = "질문 내용을 적어주세요")
    private String body;

    @NotNull(message = "태그를 기입해주세요.")
    private List<QuestionTagDto> questionTags;



}
