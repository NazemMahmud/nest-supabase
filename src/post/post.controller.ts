import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostEntity } from '../models/post.model';

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Post()
    create(@Body() post: PostEntity) {
        return this.postService.createPost(post);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.postService.getPost(id);
    }

    @Get()
    findAll(@Query('page') page: number) {
        return this.postService.getPosts(page || 1);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() post: Partial<PostEntity>) {
        return this.postService.updatePost(id, post);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.postService.deletePost(id);
    }
}