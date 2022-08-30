package be.question.controller;

import be.question.dto.QuestionPostDto;
import be.question.entity.Question;
import be.question.mapper.QuestionMapper;
import be.question.service.QuestionService;
import be.response.SingleResponseDto;
import be.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/v1/question")
@Validated
@Slf4j
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;
    private final UserService userService;

    public QuestionController(QuestionService questionService,
                              QuestionMapper mapper,
                              UserService userService){
        this.mapper = mapper;
        this.questionService=questionService;
        this.userService = userService;
    }

    /**
     * 질문 작성 API
     * **/
    @PostMapping("/write")
    public ResponseEntity PostQuestion(@Valid @RequestBody QuestionPostDto questionPostDto){
        Question question = questionService.createQuestion(
                mapper.questionPostDtoToQuestion(userService,questionPostDto));


        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)), HttpStatus.CREATED);
    }




}
