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

  findAll(keyword?: string, page?: string) {
    let filteredPosts = this.posts;
    if (keyword) {
      filteredPosts = this.posts.filter(
        (post) => post.title.includes(keyword) || post.body.includes(keyword),
      );
    }

    const limit = 10; // 1ページあたりの件数
    const currentPage = page ? parseInt(page, 10) : 1;
    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedItems = filteredPosts.slice(startIndex, endIndex);

    return {
      total: filteredPosts.length,
      page: currentPage,
      limit,
      items: paginatedItems,
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
  }
}
