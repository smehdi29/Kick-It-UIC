package net.backend.sphkbackend.repository;

import net.backend.sphkbackend.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post,Long> {
}
