package be.answer.service;

import be.answer.dto.AnswerResponseDto;
import be.answer.entity.Answer;
import be.answer.repository.AnswerRepository;
import be.exception.BusinessLogicException;
import be.exception.ExceptionCode;
import be.question.entity.Question;
import be.user.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public Page<Answer> findAnswers(Question question, int answerPage, int answerSize, String answerSort){
        Page<Answer> findAllAnswer = answerRepository.finaAllByQuestionAndAnswerStatus( //해당question의 삭제되지 않은 answer의 Page를 가져온다
                PageRequest.of(answerPage-1,answerSize, Sort.by(answerSort).descending()),
                question, Answer.AnswerStatus.ANSWER_EXIST);
        VerifiedNoAnswer(findAllAnswer);

        return findAllAnswer;
    }

    private void VerifiedNoAnswer(Page<Answer> findAllAnswer){//status가 ANSWER_EXIST인 List 데이터가 0이면 예외발생
        if(findAllAnswer.getTotalElements()==0){
            throw new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND);
        }
    }

}
