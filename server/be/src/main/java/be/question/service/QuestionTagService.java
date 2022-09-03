package be.question.service;

import be.question.entity.Question;
import be.question.entity.QuestionTag;
import be.question.repository.QuestionTagRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuestionTagService {

    QuestionTagRepository questionTagRepository;
    public QuestionTagService(QuestionTagRepository questionTagRepository) {
        this.questionTagRepository = questionTagRepository;
    }

    public void deleteQuestionTags(Question question){
        long questionId = question.getQuestionId();
        System.out.println("질문 Id"+questionId);

//        List<QuestionTag> questionTags = question.getQuestionTags();

        List<QuestionTag> questionTags =questionTagRepository.findAllByQuestionId(questionId); //해당 질문의 태그 전부 가져옴
        questionTags.stream().forEach(questionTag->{System.out.println("삭제된 TagId:"+questionTag.getTagId());
            questionTag.setQuestionsTagStatus(QuestionTag.QuestionsTagStatus.QUESTIONS_TAG_NOT_EXIST);
            questionTagRepository.save(questionTag);});
//
//        System.out.println("findAllByQuestionId 결과 리스트 크기:"+questionTags.size());
//
//        for(QuestionTag questionTag:questionTags){
//            System.out.println("삭제된 TagId:"+questionTag.getTagId());
//            questionTagRepository.deleteById(questionTag.getTagId());
//        }
//        questionTags.stream().map(questionTag -> {System.out.println("삭제된 TagId:"+questionTag.getTagId());
//            questionTagRepository.deleteById(questionTag.getTagId()); return null;});
    }
    public List<QuestionTag> createQuestionTags(List<QuestionTag> questionTags){
        return questionTags.stream().map(questionTag -> questionTagRepository.save(questionTag)).collect(Collectors.toList());
    }
    public List<QuestionTag> findVerifiedQuestionTags(Question question){
        List<QuestionTag> findQuestionTags = questionTagRepository.findAllByQuestionAndQuestionsTagStatus(
                question, QuestionTag.QuestionsTagStatus.QUESTIONS_TAG_EXIST);
        return findQuestionTags;
    }
}
