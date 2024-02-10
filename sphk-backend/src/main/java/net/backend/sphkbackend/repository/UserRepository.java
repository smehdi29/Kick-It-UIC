package net.backend.sphkbackend.repository;

import net.backend.sphkbackend.dto.UserDto;
import net.backend.sphkbackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmailAndPassword(String email, String password);
}
