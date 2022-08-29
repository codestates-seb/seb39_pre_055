package be.user.controller;

import be.user.dto.UserPostDto;
import be.user.entity.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Validated
@RequestMapping("v1/user")
public class UserController {



    @PostMapping
    public ResponseEntity postCoffee(@RequestBody UserPostDto userPostDto) {
        return new ResponseEntity<>(userPostDto,HttpStatus.OK);
    }

}
