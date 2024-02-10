package net.backend.sphkbackend.repository;

import net.backend.sphkbackend.entity.Game;
import net.backend.sphkbackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Long> {
}
