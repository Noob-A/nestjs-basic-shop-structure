import {NestFactory} from '@nestjs/core';
import {UsersService} from './users/users.service';
import {AppModule} from './app.module';
import * as readline from 'readline';
import * as chalk from 'chalk';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(query: string, fallback: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            if (answer !== "") {
                resolve(answer);
            } else {
                resolve(fallback)
            }
        });
    });
}

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const usersService = app.get(UsersService);

    console.log(chalk.blue('🚀 Superuser Creation CLI 🚀'));

    const username = await askQuestion(chalk.green('Enter username(root): '), 'root');
    const password = await askQuestion(chalk.green('Enter password (root): '), 'root');
    const fallback_email = `${username}@example.com`
    const email = await askQuestion(chalk.green(`Enter email (${fallback_email}): `), fallback_email);

    const superuser = {
        username,
        password: password,
        email: email,
        isAdmin: true,
    };

    const user = await usersService.create(superuser);
    console.log(chalk.yellow('🎉 Superuser created successfully! 🎉'));

    rl.close();
    await app.close();
}

bootstrap();
