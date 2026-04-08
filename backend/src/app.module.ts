import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TodosModule, PostsModule, UsersModule, AuthModule],
})
export class AppModule {}
