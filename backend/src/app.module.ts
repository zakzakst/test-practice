import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [TodosModule, PostsModule],
})
export class AppModule {}
