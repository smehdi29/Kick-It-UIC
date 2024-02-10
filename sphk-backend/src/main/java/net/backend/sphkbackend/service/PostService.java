package net.backend.sphkbackend.service;

import net.backend.sphkbackend.dto.PostDto;
import net.backend.sphkbackend.entity.Post;

import java.util.List;

public interface PostService {
    PostDto createPost(PostDto postDto);
    PostDto getPostById(Long postId);
    List<PostDto> getAllPosts();

}
