import {Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {Product} from './products.entity';
import {CreateProductDto, UpdateProductDto} from './products.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productsRepository: Repository<Product>,
    ) {
    }

    findAll(): Promise<Product[]> {
        return this.productsRepository.find();
    }

    findOne(id: number): Promise<Product> {
        return this.productsRepository.findOne({where: {id}});
    }

    create(productDto: CreateProductDto): Promise<Product> {
        const product = new Product();
        product.name = productDto.name;
        product.price = productDto.price;

        return this.productsRepository.save(product);
    }

    async update(productDto: UpdateProductDto): Promise<Product> {
        const product = await this.productsRepository.findOne({where: {id: productDto.id}});
        if (productDto.name) {
            product.name = productDto.name;
        }
        if (productDto.price) {
            product.price = productDto.price;
        }

        return this.productsRepository.save(product);
    }

    async remove(id: number): Promise<void> {
        await this.productsRepository.delete(id);
    }
}
