package be.jwt.config.jwt;

import be.jwt.config.auth.PrincipalDetails;
import be.user.dto.LoginRequestDto;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

// login 요청해서 username (프리플젝에서는 email), password 전송하면(POST) UsernamePasswordAuthenticationFilter가 작동해야 하지만,
// Security/config에서 formLogin을 disable했으므로 작동 안 함. 작동시키려면 이 필터를 SecurityConfig에 등록하면 됨.
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter{

    private final AuthenticationManager authenticationManager;

    // [1] 로그인 요청 시, 로그인 시도를 위해 실행되는 함수
    // /login 요청이 오면 -> UsernamePass~Filter가 가로채서 attemptAuthentication 함수가 자동 실행)
    // Authentication 객체 만들어서 리턴 => 의존 : AuthenticationManager
    // 인증 요청시에 실행되는 함수 => /login
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException {

        System.out.println("JwtAuthenticationFilter : 진입");

        // request에 있는 username(프리 프로젝트에서는 email)과 password를 파싱해서 자바 Object로 받기
        ObjectMapper om = new ObjectMapper(); // JSON data를 parsing해주는 클래스
        LoginRequestDto loginRequestDto = null;
        try {
            loginRequestDto = om.readValue(request.getInputStream(), LoginRequestDto.class); // getInputStream(): 리소스의 위치를 찾고 오픈 후 리소스를 읽기 위한 InputStream 리턴. 호출할 때마다 새로운 InputStream를 리턴. 스트림을 닫는 것은 호출한 쪽에 책임이 있다.
        } catch (Exception e) {
            e.printStackTrace();
        }

        System.out.println("JwtAuthenticationFilter : "+loginRequestDto);

        // username, password 입력하여 직접 토큰 생성
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(
                        loginRequestDto.getEmail(),
                        loginRequestDto.getPassword());

        System.out.println("JwtAuthenticationFilter : 토큰생성완료");

        // authenticate() 함수가 호출 되면 인증 프로바이더가 UserDetailService의 loadUserByUsername(토큰의 첫번째 parameter) 호출하고 ->
        // UserDetails를 리턴받아서 토큰의 두번째 parameter(credential)과 UserDetails(DB값)의 getPassword()함수로 비교해서 동일하면 ->
        // Authentication 객체를 만들어서 필터체인으로 리턴해준다.

        // Tip: 인증 프로바이더의 디폴트 서비스는 UserDetailsService 타입
        // Tip: 인증 프로바이더의 디폴트 암호화 방식은 BCryptPasswordEncoder
        // 결론은 인증 프로바이더에게 알려줄 필요가 없음.
        Authentication authentication =
                authenticationManager.authenticate(authenticationToken);

        // 정상적으로 실행되면 authentication 객체가 session 영역에 저장됨.(저장되지 않으면 hasRole같은 권한 관리가 되지 않음) -> 로그인이 되었다는 뜻.
        // DB에 있는 username(프리 프로젝트에서는 email)과 password가 일치한다.
        PrincipalDetails principalDetailis = (PrincipalDetails) authentication.getPrincipal();
        System.out.println("Authentication : "+principalDetailis.getUser().getEmail());
        return authentication;
    }

    // [2] JWT Token 생성해서 response에 담아주기
    // - attemptAuthentication 실행 후 인증이 정상적으로 되었으면 -> 아래 successfulAuthentication 함수가 실행됨.
    // - JWT 토큰을 만들어서 request 요청한 사용자에게 JWT토큰을 응답해주면 됨.
    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
                                            Authentication authResult) throws IOException, ServletException {

        PrincipalDetails principalDetailis = (PrincipalDetails) authResult.getPrincipal();

        String jwtToken = JWT.create() // JWT 라이브러리 이용해서 JWT 토큰 만드는 과정.
                .withSubject(principalDetailis.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + JwtProperties.EXPIRATION_TIME))
                .withClaim("id", principalDetailis.getUser().getUserId())
                .withClaim("login email", principalDetailis.getUser().getEmail())
                .sign(Algorithm.HMAC512(JwtProperties.SECRET)); // Hash암호방식. secret key를 알고 있어야 한다.

        response.addHeader(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX+jwtToken);
    }

}