package be.config.jwt;

import java.io.IOException;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import be.config.auth.PrincipalDetails;
import be.user.dto.UserLoginDto;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

//스프링 시큐리티에서 UsernamePasswordAuthenticationFilter 가 있음
// 로그인 요청에서 username,password 전송하면 (post)
//UsernamePasswordAuthenticationFilter 동작을 함
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;

    //로그인 요청을 하면 로그인 시도를 위해서 실행되는 함수 /login
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException {
        System.out.println("JwtAuthenticationFilter:로그인 시도함");
        /**
         * 1. username, password 받아서
         * 2. 정상인지 로그인 시도를 해보는 거에요
         * 3. AuthenticationManager로 로그인 시도하면 -> PrincipalDetailService 실행됌
         * 4. PrincipalDetails를 세션에 담고
         * 5. jwt 토큰을 만들어서 응답을 해주면 됌
         * **/

        ObjectMapper om = new ObjectMapper();
        UserLoginDto userLoginDto =null;
        try{
            userLoginDto = om.readValue(request.getInputStream(),UserLoginDto.class);

        }catch(Exception e){
            e.printStackTrace();
        }

        System.out.println("JwtAuthenticationFilter : "+userLoginDto);

        // 유저네임패스워드 토큰 생성
        UsernamePasswordAuthenticationToken authenticationToken=
                new UsernamePasswordAuthenticationToken(
                        userLoginDto.getEmail(),
                        userLoginDto.getPassword()
                );
        System.out.println("JwtAuthenticationFilter : 토큰생성완료");

        // authenticate() 함수가 호출 되면 인증 프로바이더가 유저 디테일 서비스의
        // loadUserByUsername(토큰의 첫번째 파라메터) 를 호출하고
        // UserDetails를 리턴받아서 토큰의 두번째 파라메터(credential)과
        // UserDetails(DB값)의 getPassword()함수로 비교해서 동일하면
        // Authentication 객체를 만들어서 필터체인으로 리턴해준다.

        // Tip: 인증 프로바이더의 디폴트 서비스는 UserDetailsService 타입
        // Tip: 인증 프로바이더의 디폴트 암호화 방식은 BCryptPasswordEncoder
        // 결론은 인증 프로바이더에게 알려줄 필요가 없음.
        Authentication authentication = authenticationManager.
                authenticate(authenticationToken);
        PrincipalDetails principalDetails = (PrincipalDetails)authentication.
                getPrincipal();
        System.out.println("Authentication : "+principalDetails.getUser().getEmail());

        return authentication;
    }
    //attemptAuthentication 위 함수 실행 후 인증이 정상적으로 되었으면 successfulAuthentication 실행됌
    // JWT Token 생성해서 response에 담아주기
    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
                                            Authentication authResult) throws IOException, ServletException {

        PrincipalDetails principalDetailis = (PrincipalDetails) authResult.getPrincipal();

        String jwtToken = JWT.create()
                .withSubject(principalDetailis.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis()+JwtProperties.EXPIRATION_TIME))
                .withClaim("userId", principalDetailis.getUser().getUserId())
                .withClaim("email", principalDetailis.getUser().getEmail())
                .sign(Algorithm.HMAC512(JwtProperties.SECRET));

        response.addHeader(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX+jwtToken);
    }
}
