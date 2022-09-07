package be.answer.repository;

import be.answer.entity.Answer;
import be.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

    @Query("select c from Answer c where c.question =:question and c.answerStatus =:answerStatus")
    Page<Answer> finaAllByQuestionAndAnswerStatus(Pageable pageable, @Param("question") Question question, @Param("answerStatus") Answer.AnswerStatus answerStatus);
}