package net.backend.sphkbackend.mapper;

import net.backend.sphkbackend.dto.GameDto;
import net.backend.sphkbackend.entity.Game;

public class GameMapper {
    public static GameDto mapToGameDto(Game game){
        return new GameDto(
                game.getId(),
                game.getTitle(),
                game.getSport(),
                game.getTime(),
                game.getDate(),
                game.getTeamSize(),
                game.getLocation(),
                game.getNumParticipants()
        );
    }

    public static Game mapToGame(GameDto gameDto){
        return new Game(
                gameDto.getId(),
                gameDto.getTitle(),
                gameDto.getSport(),
                gameDto.getTime(),
                gameDto.getDate(),
                gameDto.getTeamSize(),
                gameDto.getLocation(),
                gameDto.getNumParticipants()
        );
    }
}
