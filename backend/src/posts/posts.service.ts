import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { posts } from './db';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  private posts: Post[] = posts;

  create(createPostDto: CreatePostDto) {
    const date = new Date();
    const newPost: Post = {
      ...createPostDto,
      id: this.posts.length + 1,
      createdAt: date.toISOString(),
      updatedAt: date.toISOString(),
    };
    this.posts.push(newPost);
    return newPost;
  }

  findAll() {
    return {
      total: this.posts.length,
      page: 1,
      items: this.posts,
    };
  }

  findOne(id: number) {
    const post = this.posts.find((p) => p.id === id);
    if (!post) {
      throw new NotFoundException(`対象の投稿は見つかりませんでした`);
    }
    return post;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    const index = this.posts.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`対象の投稿は見つかりませんでした`);
    }
    const date = new Date();
    const newPost = {
      ...this.posts[index],
      updatedAt: date.toISOString(),
      ...updatePostDto,
    };
    this.posts[index] = newPost;
    return newPost;
  }

  remove(id: number) {
    const post = this.posts.find((p) => p.id === id);
    if (!post) {
      throw new NotFoundException(`対象の投稿は見つかりませんでした`);
    }
    this.posts = this.posts.filter((p) => p.id !== id);
    return {
      message: '投稿を削除しました',
    };
  }
}
