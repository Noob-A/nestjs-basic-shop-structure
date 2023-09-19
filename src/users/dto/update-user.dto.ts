import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, MaxLength, IsEmail, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ required: false })
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @IsOptional()
  password?: string;

  @ApiProperty({ required: false })
  @IsEmail()
  @IsOptional()
  email?: string;
}
