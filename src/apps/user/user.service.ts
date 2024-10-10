import { Injectable, Inject } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { User } from '../../models/user.model';

@Injectable()
export class UserService {
    constructor(@Inject('SUPABASE_CLIENT') private readonly supabase: SupabaseClient) {}

    async createUser(user: Partial<User>) {
        const { data, error } = await this.supabase.from('users').insert(user);
        if (error) throw new Error(error.message);
        return data;
    }

    async getUser(id: string) {
        const { data, error } = await this.supabase.from('users').select('*').eq('id', id).single();
        if (error) throw new Error(error.message);
        return data;
    }

    async updateUser(id: string, user: Partial<User>) {
        const { data, error } = await this.supabase.from('users').update(user).eq('id', id);
        if (error) throw new Error(error.message);
        return data;
    }

    async deleteUser(id: string) {
        const { data, error } = await this.supabase.from('users').delete().eq('id', id);
        if (error) throw new Error(error.message);
        return data;
    }
}