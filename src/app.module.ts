import { Module } from '@nestjs/common';
import { ToDoController } from './app.controller';
import { ToDoService } from './app.service'

@Module({
  controllers: [ToDoController], 
  providers: [ToDoService], 
})
export class AppModule {}
