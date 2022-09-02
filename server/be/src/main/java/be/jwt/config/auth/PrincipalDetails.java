package be.jwt.config.auth;

import be.user.entity.User;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

@Data
public class PrincipalDetails implements UserDetails {

    private User user; // composition

    public PrincipalDetails(User user) {
        this.user = user;
    }

    public User getUser() {
        return user;
    }

    @Override
    public String getPassword() { // UserDetails 인터페이스에 정의된 메서드
        return user.getPassword(); // 실제 User 클래스에서도 패스워드 역할은 password 이므로 getPassword 사용
    }

    @Override
    public String getUsername() { // UserDetails 인터페이스에 정의된 메서드
        return user.getEmail(); // 실제 User 클래스에서 실질적 username - 로그인 ID 역할은 email 이므로 getEmail 사용
    }

    @Override
    public boolean isAccountNonExpired() { // 계정이 만료되지 않았는지 여부
        return true;
    }

    @Override
    public boolean isAccountNonLocked() { // 계정이 잠기지 않았는지 여부
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() { // 암호 사용 기간이 지났는지 확인
        return true;
    }

    @Override
    public boolean isEnabled() { // 계정 활성화 여부
        return true;
        // 사용예시 : 1년 동안 로그인 안 하면 휴면 설정. if(현재 시간 - 마지막 로그인 시간 > 1년), return false
    }

    // 해당 유저의 권한 리턴. 권한 레벨이 1개뿐이라도(회원) -> 회원과 비회원은 권한의 차이가 있으므로 이 부분을 활성화.
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> authorities = new ArrayList<>();
        user.getRoleList().forEach(n -> {
            authorities.add(() -> n);
        });
        return authorities;
    }
}

    /**
     *  spring security는 /login 요청 시 낚아채서 로그인 진행
     *  로그인이 완료되면 security session을 만들어 준다. SecurityContextHolder이라는 key값에 session정보를 저장하는 것.
     *  session에 들어갈 수 있는 객체는 Authentication 타입이어야 하고, 그 Authentication 안에 user정보가 있어야 함.
     *  그 user 객체타입은 UserDetails 타입의 객체여야 한다.
     *  Security Session -> Authentication -> UserDetails (이 파일에서 PrincipalDetails)
     */
