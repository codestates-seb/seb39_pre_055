package be.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserPostDto {
//    private int i;

    @NotBlank
    @Email
    private String email;

    @NotBlank(message = "Display name should not be blank.")
    private String displayName;

    @NotBlank(message = "Password name should not be blank.")
    private String password;
}
