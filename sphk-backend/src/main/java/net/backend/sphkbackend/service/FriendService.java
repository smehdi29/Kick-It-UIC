package net.backend.sphkbackend.service;



import net.backend.sphkbackend.dto.FriendDto;
import net.backend.sphkbackend.entity.Friend;

import java.util.List;

public interface FriendService {
    FriendDto createFriend(FriendDto friendDto);
    FriendDto getFriendById(Long friendId);
    List<FriendDto> getAllFriends();
    void deleteFriend(Long friendId);
    List<Friend> findFriendsById(Long userId);
}
