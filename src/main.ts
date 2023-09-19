import {NestFactory} from '@nestjs/core';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import {AppModule} from './app.module';
import {config} from 'dotenv';
import {ValidationPipe} from "@nestjs/common";

config();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
        .setTitle('NestJS API')
        .setDescription('The API description')
        .setVersion('1.0')
        .addBearerAuth({type: 'http', scheme: 'bearer', bearerFormat: 'JWT'})
        .addTag('products')
        .addTag('users')
        .build();


    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-docs', app, document);

    await app.listen(3000);
}

bootstrap();
