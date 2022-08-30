package be.question.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "QUESTIONS_TAG")
public class QuestionTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tagId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, name = "STATUS")
    private QuestionsTagStatus questionsTagStatus =
            QuestionsTagStatus.QUESTIONS_TAG_EXIST;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;
    public void addQuestion(Question question) {
        this.question = question;
    }

    @Column(nullable = false)
    private String tagName;

    public enum QuestionsTagStatus {
        QUESTIONS_TAG_NOT_EXIST("존재하지 않는 태그"),
        QUESTIONS_TAG_EXIST("존재 태그");

        @Getter
        private String status;

        QuestionsTagStatus(String status) {
            this.status = status;
        }
    }
}
