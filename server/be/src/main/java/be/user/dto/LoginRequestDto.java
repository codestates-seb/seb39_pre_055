package be.user.dto;

import lombok.Data;

@Data
public class LoginResponseDto {
    private String email;
    private String password;
}
