import { Injectable } from '@nestjs/common';

@Injectable()
export class ToDoService {
  private tasks = [];
  private taskId = 1;

  getAllTasks() {
    return this.tasks;
  }

  addTask(task: { title: string; description: string }) {
    const newTask = { id: this.taskId++, ...task };
    this.tasks.push(newTask);
    return { message: 'Task added successfully !', task: newTask };
  }

  updateTask(id: number, updatedTask: { title: string; description: string }) {
    const task = this.tasks.find(task => task.id === id);
    if (!task) {
      return 'Task not found !' 
    }

    Object.assign(task, updatedTask);
    return { message: 'Task updated successfully !', task };
  }

  deleteTask(id: number) {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index === -1) {
      return 'Task not found!'
    }

    this.tasks.splice(index, 1);
    return 'Task deleted successfully !' 
  }
}
