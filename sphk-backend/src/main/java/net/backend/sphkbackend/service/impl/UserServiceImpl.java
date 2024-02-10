package net.backend.sphkbackend.service.impl;

import lombok.AllArgsConstructor;
import lombok.Setter;
import net.backend.sphkbackend.dto.UserDto;
import net.backend.sphkbackend.entity.User;
import net.backend.sphkbackend.exception.ResourceNotFoundException;
import net.backend.sphkbackend.mapper.UserMapper;
import net.backend.sphkbackend.repository.UserRepository;
import net.backend.sphkbackend.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    @Override
    public UserDto createUser(UserDto userDto) {

        User user = UserMapper.mapToUser(userDto);
        User savedUser = userRepository.save(user);

        return UserMapper.mapToUserDto(savedUser);
    }

    @Override
    public UserDto getUserById(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User not found with given id: " + userId));
        return UserMapper.mapToUserDto(user);
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> l = userRepository.findAll();
        return l.stream().map(UserMapper::mapToUserDto)
                .collect(Collectors.toList());
    }

    @Override
    public UserDto updateUser(Long userId, UserDto updatedUser) {
        User user = userRepository.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User does not exist with given id: " + userId));

        user.setFirstname(updatedUser.getFirstname());
        user.setLastname(updatedUser.getLastname());
        user.setAge(updatedUser.getAge());
        user.setEmail(updatedUser.getEmail());
        user.setPassword(updatedUser.getPassword());
        user.setPfp(updatedUser.getPfp());
        User updatedUserObj = userRepository.save(user);
        return UserMapper.mapToUserDto(updatedUserObj);
    }

    @Override
    public UserDto authenticate(String email, String password) {
        return UserMapper.mapToUserDto(userRepository.findByEmailAndPassword(email,password));
    }
}
