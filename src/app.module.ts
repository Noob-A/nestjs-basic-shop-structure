import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UsersModule} from './users/users.module';
import {AuthModule} from "./auth/auth.module";
import {ProductsModule} from "./products/products.module";
import {OrdersModule} from "./orders/orders.module";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TelegramModule} from "nestjs-telegram";
import {TelegrafModule} from "nestjs-telegraf";
import {TelegramService} from "./telegram/telegram.service"; // Adjust the path if necessary

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        TelegrafModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                token: configService.get<string>('TELEGRAM_BOT_TOKEN'),
            }),
            inject: [ConfigService],
        }),
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'temporary.db', // e.g., './src/database.sqlite'
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        }),


        // ... other modules
        UsersModule,
        AuthModule,
        ProductsModule,
        OrdersModule

    ],
    providers: [TelegramService],
})
export class AppModule {
}
