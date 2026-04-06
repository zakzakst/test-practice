import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { todos } from './db';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  private todos: Todo[] = todos;

  create(createTodoDto: CreateTodoDto) {
    const newTodo: Todo = {
      ...createTodoDto,
      id: todos.length + 1,
      completed: false,
    }
    this.todos.push(newTodo);
    return newTodo;
  }

  findAll() {
    return this.todos;
  }

  findOne(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new NotFoundException(`対象のTODOは見つかりませんでした`);
    }
    return todo;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) {
      throw new NotFoundException(`対象のTODOは見つかりませんでした`);
    }
    return {
      ...todo,
      ...updateTodoDto,
    }
  }

  remove(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return {
      message: 'TODOを削除しました'
    };
  }
}
