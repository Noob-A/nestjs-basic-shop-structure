import {JwtModule} from '@nestjs/jwt';
import {Module} from "@nestjs/common";
import * as process from "process";
import {PassportModule} from "@nestjs/passport";
import {UsersModule} from "../users/users.module";
import {AuthService} from "./auth.service";
import {JwtStrategy} from "./jwt.strategy";
import {AuthController} from "./auth.controller";


@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET_KEY, // Use environment variable in production
            signOptions: {expiresIn: process.env.JWT_ACCESS_TIME},
        }),
    ],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule {}