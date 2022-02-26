import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';


@Module({
  imports: [
    MongooseModule.forRoot(''),
    TaskModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
