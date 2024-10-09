import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from '../models/comment.model';

@Controller('comments')
export class CommentController {
    constructor(private readonly commentService: CommentService) {}

    @Post()
    create(@Body() comment: Comment) {
        return this.commentService.createComment(comment);
    }

    @Get('post/:postId')
    findCommentsByPost(@Param('postId') postId: string) {
        return this.commentService.getCommentsByPost(postId);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() comment: Partial<Comment>) {
        return this.commentService.updateComment(id, comment);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.commentService.deleteComment(id);
    }
}