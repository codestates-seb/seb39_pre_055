package be.config.auth;

import be.user.entity.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

/**
 * 시큐리티가 로그인 주소요청 오면 낚아채서 로그인 진행
 * 로그인 진행이 완료가 되면 시큐리티 세션을 만들어줍니다.
 * Security ContextHolder 라는 곳에 키값으 저장
 *세션에 들어갈 수 있는 정보 정해져 있음 -> Authentication 타입 객체
 * Authentication 안에 User 정보(UserDetails) 있어야 함
 *
 * **/

public class PrincipalDetails implements UserDetails {

    private User user;

    public PrincipalDetails(User user){
        this.user = user;
    }

    public User getUser(){
        return user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(()->user.getRole());
        return authorities;
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
