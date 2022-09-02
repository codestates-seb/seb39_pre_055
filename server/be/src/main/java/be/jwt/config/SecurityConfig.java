package be.jwt.config;

import be.jwt.config.jwt.JwtAuthenticationFilter;
import be.jwt.config.jwt.JwtAuthorizationFilter;
import be.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.filters.CorsFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@Configuration
@EnableWebSecurity(debug = true) // spring security filter가 spring filter chain에 등록된다.
@RequiredArgsConstructor
public class SecurityConfig {

    @Autowired
    private final CorsFilter corsFilter;

    @Autowired
    private final UserRepository userRepository;

    // Password encoder를 IoC컨테이너에 등록. (password를 암호화하지 않으면 시큐리티 로그인 불가) 이 메서드에서 리턴되는 객체를 IoC로 등록해준다.
    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

//        http.addFilterBefore(new Filter1(), BasicAuthenticationFilter.class);

        http.csrf().disable();
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) // session을 사용하지 않겠다는 뜻.
                .and()
//                .addFilter(corsFilter) // 주석처리한 이유는 application.java에 이미 CORS방지를 해두었기 때문.
                // (참고 : @CrossOrigin은 인증 필요없는 요청만 허용. 인증이 필요한 경우 Security Filter에 등록해야 함.

                .formLogin().disable() // form 태그 만들어서 로그인 하지 않음. (FE에서 구현 중)
                .httpBasic().disable() // httpBASIC 이 아닌 Bearer - 토큰 방식으로 인증하겠다는 뜻.
                .apply(new CustomDsl()) // 커스텀 필터 등록(아래 내부 클래스 CustomDsl 참조)/ 왜 이 위치인지 이유를 찾아볼 것.
                // Jwt 로그인을 위해서 작성한 JwtAuthenticationFilter를 추가하면, UsernamePasswordAuthenticationFilter가 작동됨.
//                .addFilter(new JwtAuthenticationFilter(authenticationManager()))
                // Jwt 유효성을 판단하기 위해 JwtAuthorizationFilter를 추가하면, BasicAuthenticationFilter가 작동됨.
//                .addFilter(new JwtAuthorizationFilter(authorizationManager(), userRepository))
                .and()
                .authorizeRequests()
                .antMatchers("/v1/question/write")
                .access("hasRole(ROLE_USER)")
                .antMatchers("/v1/answer/write")
                .access("hasRole(ROLE_USER)")
                .antMatchers("/v1/question/{question-id}/vote")
                .access("hasRole(ROLE_USER)")
                .antMatchers("/v1/answer/{answer_id}/vote")
                .access("hasRole(ROLE_USER)")
                .anyRequest().permitAll(); // 나머지는 모든 회원 및 비회원에게도 접근 허용한다.

        return http.build();
    }

    public class CustomDsl extends AbstractHttpConfigurer<CustomDsl, HttpSecurity> { // 아래 설명 참고

        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);
            builder
                    .addFilterBefore(new Filter1(), BasicAuthenticationFilter.class)
                    .addFilter(corsFilter)
                    .addFilter(new JwtAuthenticationFilter(authenticationManager))
                    .addFilter(new JwtAuthorizationFilter(authenticationManager, userRepository));
        }
    }

}
