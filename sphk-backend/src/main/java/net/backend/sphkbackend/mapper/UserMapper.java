package net.backend.sphkbackend.mapper;

import net.backend.sphkbackend.dto.UserDto;
import net.backend.sphkbackend.entity.User;

public class UserMapper {
    public static UserDto mapToUserDto(User user){
        return new UserDto(
                user.getId(),
                user.getFirstname(),
                user.getLastname(),
                user.getEmail(),
                user.getPassword(),
                user.getAge(),
                user.getPfp(),
                user.getSkill()
                );
    }
    public static User mapToUser(UserDto userDto){
        return new User(
                userDto.getId(),
                userDto.getFirstname(),
                userDto.getLastname(),
                userDto.getEmail(),
                userDto.getPassword(),
                userDto.getAge(),
                userDto.getPfp(),
                userDto.getSkill()
        );
    }
}
