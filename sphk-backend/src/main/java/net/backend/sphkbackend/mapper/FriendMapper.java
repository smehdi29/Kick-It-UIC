package net.backend.sphkbackend.mapper;

import net.backend.sphkbackend.dto.FriendDto;
import net.backend.sphkbackend.entity.Friend;

public class FriendMapper {

    public static FriendDto mapToFriendDto(Friend friend){
        return new FriendDto(
                friend.getId(),
                friend.getUserId1(),
                friend.getUserId2()
        );
    }
    public static Friend mapToFriend(FriendDto friendDto){
        return new Friend(
                friendDto.getId(),
                friendDto.getUserId1(),
                friendDto.getUserId2()
        );
    }
}
