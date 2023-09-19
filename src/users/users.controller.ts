import {Controller, Get, Post, Put, Delete, Body, Param, UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "@nestjs/passport";
import {RolesGuard} from "../auth/roles.guard";
import {UpdateUserDto} from "./dto/update-user.dto";
import * as bcrypt from "bcrypt";

@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() userData: UpdateUserDto): Promise<User> {
    return this.usersService.update(id, userData);
  }z

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.usersService.remove(id);
  }
}
