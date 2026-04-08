import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TodosModule, PostsModule, UsersModule],
})
export class AppModule {}
