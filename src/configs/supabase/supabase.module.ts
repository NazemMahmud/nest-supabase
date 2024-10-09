import { Module, Global } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Global()
@Module({
    providers: [
        {
            provide: 'SUPABASE_CLIENT',
            useFactory: () => {
                return createClient(
                    'https://your-project-url.supabase.co',
                    'your-public-anon-key',
                );
            },
        },
    ],
    exports: ['SUPABASE_CLIENT'],
})
export class SupabaseModule {}