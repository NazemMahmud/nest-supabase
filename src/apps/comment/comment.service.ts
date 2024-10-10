import { Injectable, Inject } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { Comment } from '../../models/comment.model';

@Injectable()
export class CommentService {
    constructor(@Inject('SUPABASE_CLIENT') private readonly supabase: SupabaseClient) {}

    async createComment(comment: Comment) {
        const { data, error } = await this.supabase.from('comments').insert(comment);
        if (error) throw new Error(error.message);
        return data;
    }

    async getCommentsByPost(postId: string) {
        const { data, error } = await this.supabase.from('comments').select('*').eq('post_id', postId);
        if (error) throw new Error(error.message);
        return data;
    }

    async updateComment(id: string, comment: Partial<Comment>) {
        const { data, error } = await this.supabase.from('comments').update(comment).eq('id', id);
        if (error) throw new Error(error.message);
        return data;
    }

    async deleteComment(id: string) {
        const { data, error } = await this.supabase.from('comments').delete().eq('id', id);
        if (error) throw new Error(error.message);
        return data;
    }
}