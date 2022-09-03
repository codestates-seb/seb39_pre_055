package be.question.repository;

import be.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.persistence.Table;
import java.util.List;
import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    Optional<Question> findByTitle(String title);


    Page<Question> findAllByQuestionStatus(Pageable pageable,Question.QuestionStatus questionStatus);//삭제된 글 빼고 전체 질문글 가져옴

    @Query(value = "select * from ((select * from questions a\n" +
            "         where upper(a.body) like upper(concat('%',:keyWord,'%')) or upper(a.title) like upper(concat('%',:keyWord,'%')))\n" +
            "         union (select * from questions q2 where q2.question_id in(\n" +
            "select b.question_id from\n" +
            "             (select * from questions_tag t where t.status = 'QUESTIONS_TAG_EXIST') b\n" +
            "         where upper(b.tag_name) like upper(concat('%',:keyWord,'%'))))) final_q where final_q.status = 'QUESTION_EXIST'",
    nativeQuery = true)
    Page<Question> searchQuestionsByKeyWord(Pageable pageable,
                                            @Param("keyWord") String keyWord);


}