package net.backend.sphkbackend.service;

import net.backend.sphkbackend.dto.GameDto;

import java.util.List;

public interface GameService {
    GameDto createGame(GameDto gameDto);
    GameDto getGameById(Long gameId);
    List<GameDto> getAllGames();
    GameDto updateGame(Long gameId, GameDto updatedGame);

    void deleteGame(Long gameId);
}
