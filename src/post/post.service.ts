import { Injectable, Inject } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { Post } from '../models/post.model';

@Injectable()
export class PostService {
    constructor(@Inject('SUPABASE_CLIENT') private readonly supabase: SupabaseClient) {}

    async createPost(post: Post) {
        const { data, error } = await this.supabase.from('posts').insert(post);
        if (error) throw new Error(error.message);
        return data;
    }

    async getPost(id: string) {
        const { data, error } = await this.supabase.from('posts').select('*').eq('id', id).single();
        if (error) throw new Error(error.message);
        return data;
    }

    async getPosts(page: number, limit = 5) {
        const { data, error } = await this.supabase
            .from('posts')
            .select('*, comments (id, content, user_id, created_at)')
            .range((page - 1) * limit, page * limit - 1);

        if (error) throw new Error(error.message);

        // Filter to make sure each post has at least 3 comments
        const postsWithComments = data.filter(post => post.comments.length >= 3);

        return postsWithComments;
    }

    async updatePost(id: string, post: Partial<Post>) {
        const { data, error } = await this.supabase.from('posts').update(post).eq('id', id);
        if (error) throw new Error(error.message);
        return data;
    }

    async deletePost(id: string) {
        const { data, error } = await this.supabase.from('posts').delete().eq('id', id);
        if (error) throw new Error(error.message);
        return data;
    }
}