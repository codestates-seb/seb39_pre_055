package be.user.mapper;

import be.user.dto.UserPostDto;
import be.user.dto.UserResponseDto;
import be.user.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    default User userPostDtoToUser(UserPostDto userPostDto) {
        User user = new User();

        user.setEmail(userPostDto.getEmail());
        user.setDisplayName(userPostDto.getDisplayName());
        user.setPassword(userPostDto.getPassword());

        return user;
    }

    default UserResponseDto userToUserResponseDto(User user) {

        UserResponseDto userResponseDto = new UserResponseDto();

        userResponseDto.setUserId(user.getUserId());
        userResponseDto.setEmail(user.getEmail());
        userResponseDto.setDisplayName(user.getDisplayName());
        userResponseDto.setPassword(user.getPassword());
        userResponseDto.setImage(user.getImage());
        userResponseDto.setUserStatus(user.getUserStatus());

        return userResponseDto;
    }

}
