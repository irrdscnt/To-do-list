import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TaskEntity } from './entity';
import {Model} from 'mongoose'
import { CreateTaskDto, UpdateTaskDto } from './dto';
import { identity, NotFoundError } from 'rxjs';

@Injectable()
export class TaskService {
    constructor(
        @InjectModel(TaskEntity.name)
        private readonly entity:Model<TaskEntity>
        ){}
    async findAll(){
        return await this.entity.find({})
        /* return await this.entity.find(
          //  {date:{$gt:new Date()}},null,/* {skip:2} ,*///{sort:{date:-1}})
    }
    async create(dto:CreateTaskDto){
        const {title}=dto
        const exist =await this.entity.findOne({title})
        console.log(exist)
        if (exist){
            throw new ConflictException()
        }
        return await this.entity.create(dto)
    }
    async findOne(id:string ){
        /* try {

        }catch(err){
            console.log(err.message)
        } */
        const task=await this.entity.findById(id)
        if (!task){
            throw new NotFoundException()
        }
        return task
    }
    async update(id:string,dto:UpdateTaskDto){
        const task = await this.findOne(id)
        Object.assign(task,dto)
        return await task.save()
    }
    async delete(id:string){
        await this.findOne(id)
        await this.entity.findByIdAndDelete(id)
        //const del=await this.entity.findByIdAndDelete(id)
        /* if(!del){
            throw new NotFoundException()
        }
        return del*/
 
    }

   

}
 