package net.backend.sphkbackend.service.impl;

import lombok.AllArgsConstructor;
import net.backend.sphkbackend.dto.FriendDto;
import net.backend.sphkbackend.entity.Friend;
import net.backend.sphkbackend.exception.ResourceNotFoundException;
import net.backend.sphkbackend.mapper.FriendMapper;
import net.backend.sphkbackend.repository.FriendRepository;
import net.backend.sphkbackend.service.FriendService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class FriendServiceImpl implements FriendService {

    private FriendRepository friendRepository;
    @Override
    public FriendDto createFriend(FriendDto friendDto) {
        Friend friend = FriendMapper.mapToFriend(friendDto);
        Friend savedFriend = friendRepository.save(friend);

        return FriendMapper.mapToFriendDto(savedFriend);
    }

    @Override
    public FriendDto getFriendById(Long friendId) {
        Friend friend = friendRepository.findById(friendId)
                .orElseThrow(()->new ResourceNotFoundException("Friend not found with given ID: "+ friendId));

        return FriendMapper.mapToFriendDto(friend);
    }

    @Override
    public List<FriendDto> getAllFriends() {
        List<Friend> friends = friendRepository.findAll();
        return friends.stream().map(FriendMapper::mapToFriendDto)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteFriend(Long friendId) {
        Friend friend = friendRepository.findById(friendId)
                .orElseThrow(()->new ResourceNotFoundException("Friend not found with given ID: "+ friendId));
        friendRepository.deleteById(friendId);
    }

    @Override
    public List<Friend> findFriendsById(Long userId){
        return friendRepository.findByUserId1OrUserId2(userId, userId);
    }
}
