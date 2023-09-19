import {ApiDefaultResponse, ApiProperty} from '@nestjs/swagger';
import {IsString, MinLength, MaxLength, IsEmail, IsNotEmpty, IsBoolean} from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsBoolean()
  isAdmin: boolean
}
