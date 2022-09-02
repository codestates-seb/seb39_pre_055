package be.jwt.config.jwt;

import be.jwt.config.auth.PrincipalDetails;
import be.user.entity.User;
import be.user.repository.UserRepository;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// security filter 중 BasicAuthenticationFilter는 권한, 인증이 필요한 특정 주소를 요청했을 때
// 이 필터를 무조건 거쳐야 한다.
public class JwtAuthorizationFilter extends BasicAuthenticationFilter {

    private UserRepository userRepository;

    public JwtAuthorizationFilter(AuthenticationManager authenticationManager, UserRepository userRepository) {
        super(authenticationManager);
        this.userRepository = userRepository;
    }

    // 인증이나 권한이 필요한 주소 요청이 있을 때, BasicAuthenticationFilter를 타게 됨.
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
        System.out.println("인증이나 권한이 필요한 주소 요청 됨.");

        String jwtHeader = request.getHeader("Authorization"); // JWT가 포함된 Header를 받는다.

        // header가 있는지 확인
        if(jwtHeader == null || !jwtHeader.startsWith("Bearer")) {
            chain.doFilter(request, response);
            return;
        }

        // JWT를 검증하여 정상적 사용자인지 확인
        String jwtToken = jwtHeader.replace("Bearer ", ""); // JWT는 "Bearer asda8711!@##12..." 형태로 주어지므로 순수한 JWT만 뽑아내는 것.

        // jwtToken을 서명이 정상적으로 이루어지면 email(프리 프로젝트에서 로그인id는 이메일이니까)을 가져 와서 String으로 캐스팅.
        String email = JWT.require(Algorithm.HMAC512("jwt_token")).build().verify(jwtToken).getClaim("username").asString();

        // username이 정상적으로 들어왔다면 서명이 정상적이라는는 뜻.
        if (email != null) {
            User userEntity = userRepository.findByEmail(email);

            PrincipalDetails principalDetails = new PrincipalDetails(userEntity);

            // 토큰 서명을 통해 Authentication 만들어 준다. (username이 null이 아니므로 사용자는 정상적으로 인증되었으므로 만들 수 있다)
            Authentication authentication = new UsernamePasswordAuthenticationToken(principalDetails, null, principalDetails.getAuthorities());

            // 강제로 시큐리티 세션에 접근하여 Authentication 객체를 저장.
            SecurityContextHolder.getContext().setAuthentication(authentication);

            chain.doFilter(request, response); // 다시 체인을 타게 한다.
        }
        super.doFilterInternal(request, response, chain);
    }
}
