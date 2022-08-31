package be.question.service;

import be.exception.BusinessLogicException;
import be.exception.ExceptionCode;
import be.question.entity.Question;
import be.question.repository.QuestionRepository;
import be.user.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class QuestionService {

    private final UserService userService;
    private final QuestionRepository questionRepository;

    public QuestionService(UserService userService, QuestionRepository questionRepository) {
        this.userService = userService;
        this.questionRepository = questionRepository;
    }


    public Question createQuestion(Question question){
        verifyExistsTitle(question.getTitle());

        return questionRepository.save(question);
    }

    public Page<Question> findQuestions(int page, int size,String sort){
        return questionRepository.findAll(PageRequest.of(page,size,
                Sort.by(sort).descending()));
    }


    private void verifyExistsTitle(String title) {
        //이미 글이 존재하는 지 확인
        Optional<Question> question = questionRepository.findByTitle(title);
        if (question.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.QUESTION_EXISTS);
        }
    }

}
