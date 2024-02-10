package net.backend.sphkbackend.service.impl;

import lombok.AllArgsConstructor;
import net.backend.sphkbackend.dto.GameDto;
import net.backend.sphkbackend.entity.Game;
import net.backend.sphkbackend.exception.ResourceNotFoundException;
import net.backend.sphkbackend.mapper.GameMapper;
import net.backend.sphkbackend.repository.GameRepository;
import net.backend.sphkbackend.service.GameService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class GameServiceImpl implements GameService {

    private GameRepository gameRepository;
    @Override
    public GameDto createGame(GameDto gameDto) {
        Game game = GameMapper.mapToGame(gameDto);
        Game savedGame = gameRepository.save(game);

        return GameMapper.mapToGameDto(savedGame);
    }

    @Override
    public GameDto getGameById(Long gameId) {
        Game game = gameRepository.findById(gameId)
                .orElseThrow(()->new ResourceNotFoundException("Game not found by id: "+ gameId));
        return GameMapper.mapToGameDto(game);
    }

    @Override
    public List<GameDto> getAllGames() {
        List<Game> l = gameRepository.findAll();
        return l.stream().map(GameMapper::mapToGameDto)
                .collect(Collectors.toList());
    }

    @Override
    public GameDto updateGame(Long gameId, GameDto updatedGame) {
        Game game = gameRepository.findById(gameId).orElseThrow(()->new ResourceNotFoundException("Game not found with given id: " + gameId));

        game.setDate(updatedGame.getDate());
        game.setTime(updatedGame.getTime());
        game.setLocation(updatedGame.getLocation());
        game.setTeamSize(updatedGame.getTeamSize());
        game.setTitle(updatedGame.getTitle());
        game.setSport(updatedGame.getSport());

        Game updatedGameObj = gameRepository.save(game);
        return GameMapper.mapToGameDto(updatedGameObj);
    }

    @Override
    public void deleteGame(Long gameId) {
        Game game = gameRepository.findById(gameId).orElseThrow(()->new ResourceNotFoundException("Game not found with given id: " + gameId));
        gameRepository.deleteById(gameId);
    }
}
