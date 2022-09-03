package be.filter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class MyFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response,FilterChain chain)
        throws IOException, ServletException{
        HttpServletRequest req = (HttpServletRequest)request;
        HttpServletResponse res = (HttpServletResponse)response;

        //토큰: right 이걸 만들어 줘야 한다. emial,pw 정상으로 들어와서 로그인 완료 되면 토근을 만들어주고 그걸 응답해준다
        //요청할떄 마다 헤더에 Authorization으로 valuse 값으로 토큰을 가지고 오겠죠?
        //그떄 토근이 넣어오면 이 토큰이 내가 만든 토큰이 맞는지만 검증하면 됌!
        if(req.getMethod().equals("POST")){
            System.out.println("POST 요청됨");
            String headerAuth = req.getHeader("Authorization");
            System.out.println(headerAuth);
            System.out.println("필터 1");

            if(headerAuth.equals("right")){
                chain.doFilter(req,res);
            }else{
                PrintWriter out = res.getWriter();
                out.println("인증 안됌");
            }
        }

    }
}
