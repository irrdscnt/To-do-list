import { Body, Controller, Delete, Get, Param, Post, Put, Redirect, Res } from '@nestjs/common';
import { ApiBadRequestResponse, ApiConflictResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateTaskDto, UpdateTaskDto } from './dto';
import { FindOneTaskDto } from './dto';
import { TaskService } from './task.service';

@ApiTags('Task')
@Controller('task')
export class TaskController {
    constructor(private readonly service:TaskService){}

  @Get()
  @ApiOkResponse({type:[CreateTaskDto]})
  async findAll(){
     return await this.service.findAll()
  }
  
  /* @Get('test')
  async test(@Res()res:Response){
    const url='http://' //this.service.findUrl()
    //return res.redirect(url)


  } */
  @Post()
  @ApiCreatedResponse({type:CreateTaskDto})
  @ApiConflictResponse({description:'Task already exist'})
  async create(@Body() dto:CreateTaskDto){
    return await this.service.create(dto)
  }
  @Get(':id')
  @ApiNotFoundResponse()
  @ApiBadRequestResponse({description:'Validation issues'})
  async findOne(
  @Param() params:FindOneTaskDto
  ) {
    const {id}=params
   return await this.service.findOne(id)
  }

  @Put(':id')
  @ApiCreatedResponse({type:UpdateTaskDto})
  @ApiNotFoundResponse()
  async update(
    @Param() {id}:FindOneTaskDto,
    @Body() dto:UpdateTaskDto,
  ) {
    return await this.service.update(id,dto)
  }

  @Delete(':id')
  @ApiNotFoundResponse({description:'Task already deleted'})
  async delete(@Param() {id}:FindOneTaskDto){
    return await this.service.delete(id)
  }


}
 