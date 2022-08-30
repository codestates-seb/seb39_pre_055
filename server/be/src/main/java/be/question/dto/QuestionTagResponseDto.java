package be.question.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Setter
@Getter
public class QuestionTagResponseDto {

    private String tagName;
}
