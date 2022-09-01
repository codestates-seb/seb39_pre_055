package be.question.repository;

import be.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.Table;
import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    Optional<Question> findByTitle(String title);
}