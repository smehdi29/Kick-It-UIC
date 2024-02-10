package net.backend.sphkbackend.controller;

import lombok.AllArgsConstructor;
import net.backend.sphkbackend.dto.GameDto;
import net.backend.sphkbackend.service.GameService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@AllArgsConstructor
@RestController
@RequestMapping("/api/games")
public class GameController {
    private GameService gameService;
    @PostMapping
    public ResponseEntity<GameDto> createGame(@RequestBody GameDto gameDto){
        GameDto savedGame = gameService.createGame(gameDto);
        return new ResponseEntity<>(savedGame, HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<GameDto> getGameById(@PathVariable("id") Long gameId){
        GameDto gameDto = gameService.getGameById(gameId);
        return ResponseEntity.ok(gameDto);
    }

    @GetMapping
    public ResponseEntity<List<GameDto>> getAllGames(){
        List<GameDto> games = gameService.getAllGames();
        return ResponseEntity.ok(games);
    }
    @PutMapping("{id}")
    public ResponseEntity<GameDto> updateGame(@PathVariable("id") Long gameId, @RequestBody GameDto updatedGame){
        return ResponseEntity.ok(gameService.updateGame(gameId, updatedGame));
    }

    //Build Delete Game Rest API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteGame(@PathVariable("id") Long gameId){
        gameService.deleteGame(gameId);
        return ResponseEntity.ok("Game has been deleted");
    }
}
