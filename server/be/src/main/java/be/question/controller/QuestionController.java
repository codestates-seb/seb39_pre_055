package be.question.controller;

import be.question.dto.QuestionPostDto;
import be.question.entity.Question;
import be.question.mapper.QuestionMapper;
import be.question.service.QuestionService;
import be.response.MultiResponseDto;
import be.response.SingleResponseDto;
import be.user.mapper.UserMapper;
import be.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/v1/question")
@Validated
@Slf4j
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;
    private final UserService userService;
    private final UserMapper userMapper;

    public QuestionController(QuestionService questionService,
                              QuestionMapper mapper,
                              UserService userService,
                              UserMapper userMapper){
        this.mapper = mapper;
        this.questionService=questionService;
        this.userService = userService;
        this.userMapper = userMapper;
    }

    /**
     * 질문 작성 API
     * **/
    @PostMapping("/write")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto){
        Question question = questionService.createQuestion(
                mapper.questionPostDtoToQuestion(userService,questionPostDto));


        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(
                        userMapper,question)), HttpStatus.CREATED);
    }

    /**
     *
     * 전체 질문페이지 이동 API
     * **/
    @GetMapping()
    public ResponseEntity getQuestions(@Positive @RequestParam("page") int page,
                                       @Positive @RequestParam("size") int size,
                                       @RequestParam("sort") String sort){

        Page<Question> pageQuestions = questionService.findQuestions(page-1,size,sort);

        List<Question> questions = pageQuestions.getContent();
        return new ResponseEntity<>(new MultiResponseDto<>(
                mapper.questionsToQuestionResponseDtos(questions),
                pageQuestions),HttpStatus.OK);
    }

    /**
     * 선택 질문페이지 이동 API(뷰 증가)
     * **/
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id")
                                          @Positive long questionId){
        Question question = questionService.findQuestion(questionId);
        return new ResponseEntity<>(new SingleResponseDto<>(
                mapper.questionToQuestionResponseDto(userMapper,question)),
                HttpStatus.OK);
    }




}
