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

import java.util.List;
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

    public  Question findQuestion(long questionId){
        Question findQuestion = findVerifiedQuestion(questionId); //요청된 질문이 DB에 없으면 에러

        findQuestion.setView(findQuestion.getView()+1); //view 1증가
        questionRepository.save(findQuestion); // 수정후 DB에 저장

        return findQuestion;
    }

    public Page<Question> findQuestions(int page, int size,String sort){
//        return questionRepository.findAll(PageRequest.of(page,size,
//                Sort.by(sort).descending()));
        Page<Question> findAllQuestion = questionRepository.findAllByQuestionStatus(
                PageRequest.of(page,size,Sort.by(sort).descending()),
                Question.QuestionStatus.QUESTION_EXIST);

//        Page<Question> findAllQuestion = questionRepository.findByBody(
//                PageRequest.of(page,size,Sort.by(sort).descending()),
//                "제목1");

        findVerifiedNoQuestion(findAllQuestion);

        return findAllQuestion;

    }

    private void findVerifiedNoQuestion(Page<Question> findAllQuestion){//status가 QUESTION_EXIST인 List 데이터가 0이면 예외발생
        if(findAllQuestion.getTotalElements()==0){
            throw new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND);
        }
    }

    private Question findVerifiedQuestion(long questionId){ //요청된 질문이 DB에 없으면 에러
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }


    private void verifyExistsTitle(String title) {//이미 글이 존재하면 에러
        Optional<Question> question = questionRepository.findByTitle(title);
        if (question.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.QUESTION_EXISTS);
        }
    }

}
