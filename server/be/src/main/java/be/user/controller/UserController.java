package be.user.controller;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import be.response.SingleResponseDto;
import be.user.dto.UserPostDto;
import be.user.entity.User;
import be.user.mapper.UserMapper;
import be.user.repository.UserRepository;
import be.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/v1/user")
@Validated
@Slf4j
public class UserController {

    /**
    // 회원가입은 UserService, UserMapper 객체 이용
    // JWT로그인은 UserRepository, bCryptPasswordEncoder 객체 이용
    **/
    private final UserService userService;
    private final UserMapper mapper;

    private UserRepository userRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserController(UserService userService, UserMapper mapper) {
        this.userService = userService;
        this.mapper = mapper;
    }

    /**
     회원가입 API
     **/
    @PostMapping("/sign-up")
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userDto) {
        User user = mapper.userPostDtoToUser(userDto);
        User createdUser = userService.createUser(user);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(createdUser)),
                HttpStatus.CREATED);
    }

    /**
     로그인 with JWT API
     **/
    @PostMapping("/login")
    public String login(@RequestBody User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword())); //
        user.setRole("ROLE_USER"); // 기본으로 이렇게 설정하라고 함. (USER가 기본이래서 그런 건가?) - 이 부분은 role이 1개라도 -> 그 role에 따라 권한이 다르므로 -> 사용한다
        userRepository.save(user);
        return "Signed up successfully!";
    }

}
