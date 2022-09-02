package be.jwt.config.jwt;

public interface JwtProperties {

    String SECRET = "pre_055"; // 우리 서버만 알고 있는 비밀값

    int EXPIRATION_TIME = 1000*60*3; // 3분
    String TOKEN_PREFIX = "Bearer ";
    String HEADER_STRING = "Authorization";
}
