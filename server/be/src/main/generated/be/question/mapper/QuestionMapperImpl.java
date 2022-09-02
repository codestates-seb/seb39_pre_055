package be.question.mapper;

import be.question.dto.QuestionResponseDto;
import be.question.entity.Question;
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
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions) {
        if ( questions == null ) {
            return null;
        }

        List<QuestionResponseDto> list = new ArrayList<QuestionResponseDto>( questions.size() );
        for ( Question question : questions ) {
            list.add( questionToQuestionResponseDto( question ) );
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

    protected QuestionResponseDto questionToQuestionResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        questionResponseDto.setQuestionId( question.getQuestionId() );
        questionResponseDto.setQuestionStatus( question.getQuestionStatus() );
        questionResponseDto.setTitle( question.getTitle() );
        questionResponseDto.setBody( question.getBody() );
        questionResponseDto.setVote( question.getVote() );
        questionResponseDto.setView( question.getView() );
        questionResponseDto.setUser( userToUserResponseDto( question.getUser() ) );
        questionResponseDto.setQuestionTags( questionTagsToQuestionTagResponseDtos( question.getQuestionTags() ) );
        questionResponseDto.setCreatedAt( question.getCreatedAt() );
        questionResponseDto.setUpdatedAt( question.getUpdatedAt() );

        return questionResponseDto;
    }
}
