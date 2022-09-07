package be.question.repository;

import be.question.entity.Question;
import be.question.entity.QuestionTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface QuestionTagRepository extends JpaRepository<QuestionTag, Long> {

//    @Query(value = "delete from questions_tag where question_id = :questionId",nativeQuery = true)
//    Object deleteByQuestionId(@Param("questionId") long questionId);

    @Query(value = "select * from questions_tag where question_id = :questionId",nativeQuery = true)
    List<QuestionTag> findAllByQuestionId(@Param("questionId") long questionId);

    List<QuestionTag> findAllByQuestionAndQuestionsTagStatus(Question question, QuestionTag.QuestionsTagStatus questionsTagStatus);
}
