import { Injectable, NotFoundException } from '@nestjs/common';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

@Injectable()
export class AppService {
  private todos: Todo[] = [];
  private nextId = 1;

  getHello(): string {
    return 'Hello World!';
  }

  create(title: string): Todo {
    const newTodo: Todo = {
      id: String(this.nextId++),
      title,
      completed: false,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  findAll(): Todo[] {
    return this.todos;
  }

  deleteTodo(id: string): void {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    this.todos.splice(index, 1);
  }
}