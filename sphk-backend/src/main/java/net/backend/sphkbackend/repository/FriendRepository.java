package net.backend.sphkbackend.repository;

import net.backend.sphkbackend.dto.FriendDto;
import net.backend.sphkbackend.entity.Friend;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FriendRepository extends JpaRepository<Friend, Long> {
    List<Friend> findByUserId1OrUserId2(Long userId1, Long userId2);
}
