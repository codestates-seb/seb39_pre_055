package be.answer.mapper;

import be.answer.dto.AnswerResponseDto;
import be.answer.entity.Answer;
import be.user.entity.User;
import be.user.mapper.UserMapper;
import be.user.service.UserService;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "Spring")
public interface AnswerMapper {
    default AnswerResponseDto answerToAnswerResponseDto(UserMapper userMapper, Answer answer){
        AnswerResponseDto answerResponseDto = new AnswerResponseDto();
        answerResponseDto.setAnswerId(answer.getAnswerId());
        answerResponseDto.setAnswerStatus(answer.getAnswerStatus());
        answerResponseDto.setBody(answer.getBody());
        answerResponseDto.setCreatedAt(answer.getCreatedAt());

        User user = answer.getUser();
        answerResponseDto.setUser(userMapper.userToUserResponseDto(user));
        answerResponseDto.setVote(answer.getVote());
        answerResponseDto.setUpdatedAt(answer.getUpdatedAt());

        return answerResponseDto;
    }
//    default List<AnswerResponseDto> answersToAnswerResponseDtos(UserMapper userMapper,List<Answer> answers){
//
//        List<AnswerResponseDto> answerResponseDtos =answers.stream().map(answer -> answerToAnswerResponseDto(userMapper,answer)).collect(Collectors.toList());
//
//
//        return answerResponseDtos;
//    };
    List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers);
}
