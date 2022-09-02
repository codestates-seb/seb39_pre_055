package be.question.service;

import be.exception.BusinessLogicException;
import be.exception.ExceptionCode;
import be.question.entity.Question;
import be.question.entity.QuestionTag;
import be.question.repository.QuestionRepository;
import be.user.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class QuestionService {

    private final UserService userService;
    private final QuestionRepository questionRepository;
    private final QuestionTagService questionTagService;

    public QuestionService(UserService userService, QuestionRepository questionRepository,
                           QuestionTagService questionTagService) {
        this.userService = userService;
        this.questionRepository = questionRepository;
        this.questionTagService = questionTagService;
    }


    public Question createQuestion(Question question){
        verifyExistsTitle(question.getTitle());

        return questionRepository.save(question);
    }

    public  Question findQuestion(long questionId){
        Question findQuestion = findVerifiedQuestion(questionId); //요청된 질문이 DB에 없으면 에러

        findQuestion.setView(findQuestion.getView()+1); //view 1증가
        questionRepository.save(findQuestion); // 수정후 DB에 저장

        findQuestion.setQuestionTags(questionTagService.findVerifiedQuestionTags(findQuestion)); //해당 질문의 Tag상태가 QUESTIONS_TAG_EXIST만 표시

        return findQuestion;
    }

    public Page<Question> findQuestions(int page, int size,String sort){//전체 question에 pagenation과 sort 구현

        Page<Question> findAllQuestion = questionRepository.findAllByQuestionStatus( //삭제된 글 빼고 전체 질문글 가져옴
                PageRequest.of(page,size,Sort.by(sort).descending()),
                Question.QuestionStatus.QUESTION_EXIST);


        VerifiedNoQuestion(findAllQuestion);//status가 QUESTION_EXIST인 List 데이터가 0이면 예외발생

        return findAllQuestion;

    }

    public Question updateQuestion(Question question){
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());//요청된 질문이 DB에 없으면 에러

        Optional.ofNullable(question.getTitle()) //제목수정
                .ifPresent(questionTitle->findQuestion.setTitle(questionTitle));

        Optional.ofNullable(question.getBody()) //내용수정
                .ifPresent(questionBody->findQuestion.setBody(questionBody));


//        Optional.ofNullable(question.getQuestionTags()) //태그수정
//                .ifPresent(QuestionTags->findQuestion.setQuestionTags(QuestionTags));


        Optional.ofNullable(question.getVote()) //추천 수 수정
                .ifPresent(Vote->findQuestion.setVote(Vote));

        Optional.ofNullable(question.getQuestionStatus()) //글 삭제
                .ifPresent(questionStatus->findQuestion.setQuestionStatus(questionStatus));

        System.out.println("출력! ->"+findQuestion.getQuestionId());
        System.out.println("출력! ->" +findQuestion.getQuestionTags().stream().map(questionTag -> questionTag.getQuestion().getQuestionId()).
                collect(Collectors.toList()));

        Question updatedQuestion = questionRepository.save(findQuestion);

        if(!question.getQuestionTags().isEmpty()){//태그 업데이트
            questionTagService.deleteQuestionTags(question); //기존 태그 삭제(QUESTIONS_TAG_NOT_EXIST)됌

            questionTagService.createQuestionTags(question.getQuestionTags()); //새 태그로 갱신
        }
        updatedQuestion.setQuestionTags(questionTagService.findVerifiedQuestionTags(updatedQuestion));//해당 질문의 Tag상태가 QUESTIONS_TAG_EXIST만 표시
        return updatedQuestion;
    }

    private void VerifiedNoQuestion(Page<Question> findAllQuestion){//status가 QUESTION_EXIST인 List 데이터가 0이면 예외발생
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
