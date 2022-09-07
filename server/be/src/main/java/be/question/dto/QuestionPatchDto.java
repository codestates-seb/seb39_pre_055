package be.question.dto;

import be.question.entity.Question;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.ArrayList;
import java.util.List;

@Getter
public class QuestionPatchDto {

    @Setter
    private long questionId;

    //글 수정
    private String title;
    private String body;
    @Setter
    private List<QuestionTagDto> questionTags;



    //글 삭제
    private Question.QuestionStatus questionStatus;
}
