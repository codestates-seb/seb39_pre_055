package be.answer.service;

import be.answer.dto.AnswerResponseDto;
import be.answer.entity.Answer;
import be.answer.repository.AnswerRepository;
import be.exception.BusinessLogicException;
import be.exception.ExceptionCode;
import be.question.entity.Question;
import be.user.entity.User;
import be.user.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public Answer createAnswer(Answer answer){
        return answerRepository.save(answer);
    }

    public Answer findVerifiedAnswer(long answerId){ //요청된 답이 DB에 없으면 에러
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }


    public User findAnswerUser(long answerId){
        Answer findAnswer = findVerifiedAnswer(answerId); //요청된 답이 DB에 없으면 에러
        return findAnswer.getUser();
    }
    public Page<Answer> findAnswers(Question question, int answerPage, int answerSize, String answerSort) throws BusinessLogicException{
        Page<Answer> findAllAnswer = answerRepository.finaAllByQuestionAndAnswerStatus( //해당question의 삭제되지 않은 answer의 Page를 가져온다
                PageRequest.of(answerPage-1,answerSize, Sort.by(answerSort).descending()),
                question, Answer.AnswerStatus.ANSWER_EXIST);
        VerifiedNoAnswer(findAllAnswer);

        return findAllAnswer;
    }
    public Answer voteAnswer(long answerId,int vote){//추천수 바꿔주는 메소드
        Answer findAnswer = findVerifiedAnswer(answerId);//요청된 답이 DB에 없으면 에러
        findAnswer.setVote(vote);
        Answer updatedAnswer = answerRepository.save(findAnswer);
        return updatedAnswer;
    }
    public Answer updateAnswer(Answer answer){
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());//요청된 답이 DB에 없으면 에러

        Optional.ofNullable(answer.getBody()) //내용수정
                .ifPresent(answerBody->findAnswer.setBody(answerBody));


        Optional.ofNullable(answer.getAnswerStatus()) //글 삭제
                .ifPresent(answerStatus->findAnswer.setAnswerStatus(answerStatus));

        Answer updatedQuestion = answerRepository.save(findAnswer);

        return updatedQuestion;
    }

    private void VerifiedNoAnswer(Page<Answer> findAllAnswer) throws BusinessLogicException{//status가 ANSWER_EXIST인 List 데이터가 0이면 예외발생
        if(findAllAnswer.getTotalElements()==0){
            throw new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND);
        }
    }

}
