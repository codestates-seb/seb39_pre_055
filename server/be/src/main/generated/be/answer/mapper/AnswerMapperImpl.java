package be.answer.mapper;

import be.answer.dto.AnswerResponseDto;
import be.answer.entity.Answer;
import be.user.dto.UserResponseDto;
import be.user.entity.User;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-09-02T13:02:28+0900",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.16 (Azul Systems, Inc.)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers) {
        if ( answers == null ) {
            return null;
        }

        List<AnswerResponseDto> list = new ArrayList<AnswerResponseDto>( answers.size() );
        for ( Answer answer : answers ) {
            list.add( answerToAnswerResponseDto( answer ) );
        }

        return list;
    }

    protected UserResponseDto userToUserResponseDto(User user) {
        if ( user == null ) {
            return null;
        }

        UserResponseDto userResponseDto = new UserResponseDto();

        if ( user.getUserId() != null ) {
            userResponseDto.setUserId( user.getUserId() );
        }
        userResponseDto.setDisplayName( user.getDisplayName() );
        userResponseDto.setEmail( user.getEmail() );
        userResponseDto.setPassword( user.getPassword() );
        userResponseDto.setImage( user.getImage() );
        userResponseDto.setUserStatus( user.getUserStatus() );

        return userResponseDto;
    }

    protected AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        AnswerResponseDto answerResponseDto = new AnswerResponseDto();

        if ( answer.getAnswerId() != null ) {
            answerResponseDto.setAnswerId( answer.getAnswerId() );
        }
        answerResponseDto.setAnswerStatus( answer.getAnswerStatus() );
        answerResponseDto.setBody( answer.getBody() );
        answerResponseDto.setVote( answer.getVote() );
        answerResponseDto.setUser( userToUserResponseDto( answer.getUser() ) );
        answerResponseDto.setCreatedAt( answer.getCreatedAt() );
        answerResponseDto.setUpdatedAt( answer.getUpdatedAt() );

        return answerResponseDto;
    }
}
