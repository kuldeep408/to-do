import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ToDoService } from './app.service';

@Controller('to-do')
export class ToDoController {
  constructor(private readonly toDoService: ToDoService) {}

  @Get()
  getAllTasks() {
    return this.toDoService.getAllTasks();
  }

  @Post()
  addTask(@Body() task: { title: string; description: string }) {
    return this.toDoService.addTask(task);
  }

  @Put(':id')
  updateTask(
    @Param('id') id: number,
    @Body() task: { title: string; description: string },
  ) {
    return this.toDoService.updateTask(+id, task);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    console.log('Deleted !!!!')
    return this.toDoService.deleteTask(+id);
  }
}
