package be.user.controller;

import be.response.SingleResponseDto;
import be.user.dto.UserPostDto;
import be.user.entity.User;
import be.user.mapper.UserMapper;
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
@RequestMapping("/v1")
@Validated
@Slf4j
public class UserController {

    private UserService userService;
    private UserMapper mapper;

    public UserController(UserService userService, UserMapper mapper) {
        this.userService = userService;
        this.mapper = mapper;
    }

    @PostMapping("/sign-up")
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userDto) {
        User user = mapper.userPostDtoToUser(userDto);
        User createdUser = userService.createUser(user);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(createdUser)),
                HttpStatus.CREATED);
    }

//    @PostMapping("/login")

}
