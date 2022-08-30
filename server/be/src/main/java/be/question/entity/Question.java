package be.question.entity;

import be.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.Id;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "QUESTIONS")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "INT")
    private Long questionId;

//    @Column(nullable = false)
//    private LocalDateTime createdAt = LocalDateTime.now();
//
//    @Column(nullable = false, name = "UPDATED_AT")
//    private LocalDateTime updatedAt = LocalDateTime.now();

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, name = "STATUS")
    private QuestionStatus questionStatus = QuestionStatus.QUESTION_EXIST;

    @Column(nullable = false,columnDefinition = "TEXT")
    private String title;

    @Column(nullable = false,columnDefinition = "TEXT")
    private String body;

//    @Column(nullable = false)
//    private String tag;

    @Column(nullable = false)
    private int vote;

    @Column(nullable = false)
    private int view;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    public void addUser(User user) {
        this.user = user;
    }

    @OneToMany(mappedBy = "question",cascade = CascadeType.PERSIST)
    private List<QuestionTag> questionTags = new ArrayList<>();


    public enum QuestionStatus {
        QUESTION_NOT_EXIST("존재하지 않는 질문"),
        QUESTION_EXIST("존재하는 질문");

        @Getter
        private String status;

        QuestionStatus(String status) {
            this.status = status;
        }
    }
}