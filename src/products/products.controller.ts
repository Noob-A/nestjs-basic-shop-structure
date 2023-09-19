import {Controller, Get, Post, Put, Delete, Body, Param, UseGuards} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './products.dto';
import {ApiTags} from "@nestjs/swagger";
import {Product} from "./products.entity";
import {AuthGuard} from "@nestjs/passport";
import {RolesGuard} from "../auth/roles.guard";

@Controller('products')
@ApiTags('products')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Put()
  update(@Body() updateProductDto: UpdateProductDto): Promise<Product> {
    return this.productService.update(updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.productService.remove(id);
  }
}
