package be.user.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "USERS")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 기본 키 생성을 데이터베이스에 위임. id 값을 null로 하면 DB가 알아서 AUTO_INCREMENT.
    private Long userId;
    // private int userId;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false, name = "UPDATED_AT")
    private LocalDateTime updatedAt = LocalDateTime.now();

    @Enumerated(EnumType.ORDINAL)
    @Column(nullable = false, name = "STATUS")
    private UserStatus userStatus = UserStatus.USER_EXIST;

    @Column(nullable = false, name = "DISPLAY_NAME")
    private String displayName;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String image;

    public User(String displayName, String email, String password) {
        this.displayName = displayName;
        this.email = email;
        this.password = password;
    }

    public enum UserStatus {
        USER_NOT_EXIST("존재하지 않는 회원"),
        USER_EXIST("활동 회원");

        @Getter
        private String status;

        UserStatus(String status) {
            this.status = status;
        }
    }
}
