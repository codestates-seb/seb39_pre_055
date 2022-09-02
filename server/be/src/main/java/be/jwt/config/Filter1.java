package be.jwt.config;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

// Security Filter가 동작하기 전에 토큰을 인증하도록 하는 filter.
public class Filter1 implements Filter {

    // 전형적 filter 구현코드는 init(), doFilter, destroy()로 구성됨.

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;

        res.setCharacterEncoding("UTF-8"); // 한글 인코딩 가능하도록 설정
        if (req.getMethod().equals("POST")) { // POST 메서드일 경우에만
            String headerAuth = req.getHeader("Authorization"); // header에 Authorization 받음.

            if (headerAuth.equals("codestates")) { // 여기에서, 토큰 = 코드스테이츠 (어떤 이름으로 바꿀까?)
                chain.doFilter(req, res); // 맞는 토큰이 제시되었으므로, 다음 필터들로 계속 이동되면서 인증됨.
            } else {
                PrintWriter writer = res.getWriter();
                writer.println("인증 실패"); // 토큰이 맞지 않는다면, 이후의 필터들은 실행되지 않음. 인증되지 않음.
            }
        }
    }
}
