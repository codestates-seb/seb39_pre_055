package be.jwt.config.auth;

import be.user.entity.User;
import be.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PrincipalDetailsService implements UserDetailsService {

    @Autowired
    private final UserRepository userRepository;

    // 아래 메서드를 통해 UserDetail이 Authentication에 담겨진다. (그러면 Authentication이 Security Session에 담겨진다)
    // UserDetailsService는 loadUserByUsername()이라는 단 한개의 메서드를 가진다.
    // 아래 구현에 에러는 없는데 맞는지 모르겠다...
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException { // 실질적 Username이 email이므로 매개변수로 email입력
        User userEntity = userRepository.findByEmail(email);
        System.out.println("Your email : " + email); //
        if(userEntity != null) {
            return new PrincipalDetails(userEntity);
        }
        return null;
    }
}

    /**
     *  spring security는 /login 요청 시 낚아채서 로그인 진행
     *  로그인이 완료되면 security session을 만들어 준다. SecurityContextHolder이라는 key값에 session정보를 저장하는 것.
     *  session에 들어갈 수 있는 객체는 Authentication 타입이어야 하고, 그 Authentication 안에 user정보가 있어야 함.
     *  그 user 객체타입은 UserDetails 타입의 객체여야 한다.
     *  Security Session -> Authentication -> UserDetails
     *  PrincipalDetails을 이미 생성했으므로, Authentication 객체를 만들어서 session에 넣어야 한다.
     *
     *  security의 기본 설정(SecurityConfig)에서 loginProcessingUrl("/login"); 을 통해 로그인 요청이 오면
     *  -> 자동으로 UserDetailsService 타입으로 IoC컨테이너에 저장된 loadByUserName 함수가 실행.
     *
     *  그런데 SecurityConfig.java에서 formLogin을 disable했기 때문에 http://localhost:8080/login 요청이 동작하지 않는다. (spring security의 기본 로그인 요청주소임에도 불구하고)
     *  그래서 동작하도록 JwtAuthenticationFilter.java를 설정한다.
     */


