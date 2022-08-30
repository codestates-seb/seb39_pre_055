package be.user.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;
import java.time.LocalDateTime;
import javax.persistence.Id;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "USERS")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

//    @Column(nullable = false)
//    private LocalDateTime createdAt = LocalDateTime.now();
//
//    @Column(nullable = false, name = "UPDATED_AT")
//    private LocalDateTime updatedAt = LocalDateTime.now();

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, name = "STATUS")
    private UserStatus userStatus = UserStatus.USER_EXIST;

    @Column(nullable = false)
    private String displayName;

    @Column(nullable = false, updatable = false,unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String imag = "https://mblogthumb-phinf.pstatic.net/MjAyMDA2MTBfMTY1/MDAxNTkxNzQ2ODcyOTI2.Yw5WjjU3IuItPtqbegrIBJr3TSDMd_OPhQ2Nw-0-0ksg.8WgVjtB0fy0RCv0XhhUOOWt90Kz_394Zzb6xPjG6I8gg.PNG.lamute/user.png?type=w800";


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