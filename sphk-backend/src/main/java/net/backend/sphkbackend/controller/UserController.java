package net.backend.sphkbackend.controller;

import lombok.AllArgsConstructor;
import net.backend.sphkbackend.dto.UserDto;
import net.backend.sphkbackend.entity.User;
import net.backend.sphkbackend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@AllArgsConstructor
@RestController
@RequestMapping("/api")
public class UserController {

    private UserService userService;

    //Build Add User REST API
    @PostMapping("/users")
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto){
        UserDto savedUser = userService.createUser(userDto);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    // Build get user REST API
    @GetMapping("/users/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable("id") Long userId){
        UserDto userDto= userService.getUserById(userId);
        return ResponseEntity.ok(userDto);
    }

    @PostMapping("/login")
    public ResponseEntity<Long> login(@RequestBody UserDto userDto){
        UserDto user = userService.authenticate(userDto.getEmail(), userDto.getPassword());
        return ResponseEntity.ok(user != null ? user.getId() : null);
    }
    // Build get all users REST API
    @GetMapping("/users")
    public ResponseEntity<List<UserDto>> getAllUsers(){
        List<UserDto> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    //Build Update User REST API
    @PutMapping("/users/{id}")
    public ResponseEntity<UserDto> updateUser(@PathVariable("id") Long userId, @RequestBody UserDto updatedUser){
        return ResponseEntity.ok(userService.updateUser(userId, updatedUser));
    }
}
