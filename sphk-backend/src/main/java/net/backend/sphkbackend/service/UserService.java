package net.backend.sphkbackend.service;

import net.backend.sphkbackend.dto.UserDto;
import net.backend.sphkbackend.entity.User;

import java.util.List;

public interface UserService{
    UserDto createUser(UserDto userDto);

    UserDto getUserById(Long userId);

    List<UserDto> getAllUsers();
    UserDto updateUser(Long userId, UserDto updatedUser);

    UserDto authenticate(String email, String password);
}
