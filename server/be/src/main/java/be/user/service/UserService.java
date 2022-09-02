package be.user.service;

import be.exception.BusinessLogicException;
import be.exception.ExceptionCode;
import be.user.entity.User;
import be.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public User findUser(long userId){
        return findVerifiedUser(userId);
    }

    public User findVerifiedUser(long userId){
        Optional<User> optionalUser = userRepository.findById(userId);
        User findUser=optionalUser.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        return findUser;
    }

    public User createUser(User user) {
        // 이미 등록된 이메일인지 확인
        verifyExistsEmail(user.getEmail());

        return userRepository.save(user);
    }

    private void verifyExistsEmail(String email) {
//        Optional<User> user = userRepository.findByEmail(email);
//        if (user.isPresent())
//            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);

        User user = userRepository.findByEmail(email);
        Optional<User> joinedUser = Optional.ofNullable(user);
        if (joinedUser.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
    }
}
