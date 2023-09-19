import {Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from './users.entity';
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true
        }),
    ],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService]
})
export class UsersModule {
}

