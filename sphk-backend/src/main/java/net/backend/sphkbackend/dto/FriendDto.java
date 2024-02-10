package net.backend.sphkbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import net.backend.sphkbackend.entity.User;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FriendDto {
    private Long id;
    private Long userId1;
    private Long userId2;
}
