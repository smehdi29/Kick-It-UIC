package net.backend.sphkbackend.controller;

import lombok.AllArgsConstructor;
import net.backend.sphkbackend.dto.PostDto;
import net.backend.sphkbackend.service.PostService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/posts")
public class PostController {
    private PostService postService;

    //Build add post REST API

    @PostMapping
    public ResponseEntity<PostDto> createPost(@RequestBody PostDto postDto){
        PostDto savedPost = postService.createPost(postDto);
        return new ResponseEntity<>(savedPost, HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<PostDto> getPostById(@PathVariable("id") Long postId){
        PostDto postDto = postService.getPostById(postId);
        return ResponseEntity.ok(postDto);
    }
    @GetMapping
    public ResponseEntity<List<PostDto>> getAllPosts(){
        List<PostDto> posts = postService.getAllPosts();
        return ResponseEntity.ok(posts);
    }
}
