package net.backend.sphkbackend.service.impl;

import lombok.AllArgsConstructor;
import net.backend.sphkbackend.dto.PostDto;
import net.backend.sphkbackend.entity.Post;
import net.backend.sphkbackend.exception.ResourceNotFoundException;
import net.backend.sphkbackend.mapper.PostMapper;
import net.backend.sphkbackend.repository.PostRepository;
import net.backend.sphkbackend.service.PostService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PostServiceImpl implements PostService {

    private PostRepository postRepository;

    @Override
    public PostDto createPost(PostDto postDto) {
        Post post = PostMapper.mapToPost(postDto);
        Post savedPost = postRepository.save(post);

        return PostMapper.mapToPostDto(savedPost);
    }

    @Override
    public PostDto getPostById(Long postId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(()->new ResourceNotFoundException("Post not found with ID: " + postId));
        return PostMapper.mapToPostDto(post);
    }

    @Override
    public List<PostDto> getAllPosts() {
        List<Post> l = postRepository.findAll();
        return l.stream().map(PostMapper::mapToPostDto)
                .collect(Collectors.toList());
    }
}
