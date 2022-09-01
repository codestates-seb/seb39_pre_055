package be.answer.controller;

import be.answer.service.AnswerService;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AnswerController {
    private AnswerService answerService;

    public AnswerController(AnswerService answerService) {
        this.answerService = answerService;
    }
}
