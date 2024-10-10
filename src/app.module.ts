import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CommentModule } from './apps/comment/comment.module';
import { PostModule } from './apps/post/post.module';
import { SupabaseModule } from "./configs/supabase/supabase.module";
import { UserModule} from "./apps/user/user.module";


@Module({
  imports: [
      CommentModule,
      PostModule,
      SupabaseModule,
      UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}