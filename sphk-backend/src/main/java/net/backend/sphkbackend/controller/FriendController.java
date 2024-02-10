package net.backend.sphkbackend.controller;

import lombok.AllArgsConstructor;
import net.backend.sphkbackend.dto.FriendDto;
import net.backend.sphkbackend.entity.Friend;
import net.backend.sphkbackend.mapper.FriendMapper;
import net.backend.sphkbackend.service.FriendService;
import net.backend.sphkbackend.service.impl.FriendServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@RestController
@RequestMapping("/api/friends")
public class FriendController {
    private FriendService friendService;

    @PostMapping
    public ResponseEntity<FriendDto> createFriend(@RequestBody FriendDto friendDto){
        FriendDto savedFriend = friendService.createFriend(friendDto);
        return new ResponseEntity<>(savedFriend, HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<FriendDto> getFriendById(@PathVariable("id") Long friendId){
        FriendDto friendDto = friendService.getFriendById(friendId);
        return ResponseEntity.ok(friendDto);
    }
    @GetMapping("{id}/all")
    public ResponseEntity<List<FriendDto>> getFriendsById(@PathVariable("id") Long friendId){
        List<Friend> friends = friendService.findFriendsById(friendId);
        return ResponseEntity.ok(friends.stream().map(FriendMapper::mapToFriendDto).collect(Collectors.toList()));
    }
    @GetMapping
    public ResponseEntity<List<FriendDto>> getAllFriends(){
        List<FriendDto> friends = friendService.getAllFriends();
        return ResponseEntity.ok(friends);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteFriend(@PathVariable("id")Long friendId){
        friendService.deleteFriend(friendId);
        return ResponseEntity.ok("Friend Deleted");
    }
}
