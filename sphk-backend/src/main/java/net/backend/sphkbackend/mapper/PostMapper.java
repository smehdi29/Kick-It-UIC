package net.backend.sphkbackend.mapper;

import net.backend.sphkbackend.dto.PostDto;
import net.backend.sphkbackend.entity.Post;

public class PostMapper {
    public static PostDto mapToPostDto(Post post){
        return new PostDto(
                post.getId(),
                post.getUserId(),
                post.getGameId(),
                post.getContent(),
                post.getDate()
        );
    }

    public static Post mapToPost(PostDto postDto){
        return new Post(
                postDto.getId(),
                postDto.getUserId(),
                postDto.getGameId(),
                postDto.getContent(),
                postDto.getDate()
        );
    }

}
