package be.answer.controller;

import be.answer.dto.AnswerPostDto;
import be.answer.entity.Answer;
import be.answer.mapper.AnswerMapper;
import be.answer.service.AnswerService;
import be.question.dto.QuestionPostDto;
import be.question.entity.Question;
import be.question.service.QuestionService;
import be.response.SingleResponseDto;
import be.user.mapper.UserMapper;
import be.user.service.UserService;
import lombok.AllArgsConstructor;
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
@RequestMapping("/v1")
@Validated
@Slf4j
@AllArgsConstructor
public class AnswerController {
    private AnswerService answerService;
    private AnswerMapper mapper;
    private UserService userService;
    private UserMapper userMapper;
    private QuestionService questionService;


    /**
     * 답변 작성 API
     * **/
    @PostMapping("/user/answer/write")
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto){
        Answer question = answerService.createAnswer(
                mapper.answerPostDtoToAnswer(questionService,userService,answerPostDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponseDto(userMapper,question)), HttpStatus.CREATED);
    }


}
