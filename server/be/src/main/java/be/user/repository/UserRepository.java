package be.user.repository;

import be.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email); // JPA query method. PrincipalDetailsService에 사용될 메서드 (프리 플젝에서는 username 대신에 email 사용)
}