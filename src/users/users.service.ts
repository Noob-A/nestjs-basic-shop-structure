import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {User} from './users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {
    }

    // Create
    async create(data: Partial<User>): Promise<User> {
        const user = this.usersRepository.create(data);
        user.password = await bcrypt.hash(user.password, 12);
        return await this.usersRepository.save(user);
    }

    // Read all users
    async findAll(): Promise<User[]> {
        return await this.usersRepository.find();
    }

    // Read one user by ID
    async findOne(id: number): Promise<User> {
        return await this.usersRepository.findOne({where: {id}});
    }


    // Update
    async update(id: number, data: Partial<User>): Promise<User> {
        await this.usersRepository.update(id, data);
        return this.findOne(id);
    }

    // Delete
    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }

    // users.service.ts

    async findOneByUsername(username: string): Promise<User | undefined> {
        return this.usersRepository.findOne({where: {username}});
    }


}
