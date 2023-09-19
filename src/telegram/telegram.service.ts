import {
  Update,
  Ctx,
  Start,
  Help,
  On,
  Hears,
} from 'nestjs-telegraf';
import { UsersService } from '../users/users.service';
import { ProductsService } from '../products/products.service';
@Update()
export class TelegramService {
  constructor(
    private readonly usersService: UsersService,
    private readonly productsService: ProductsService,
  ) {}

  @Start()
  async start(@Ctx() ctx) {
    await ctx.reply('Welcome to our service!');
  }

  @Help()
  async help(@Ctx() ctx) {
    await ctx.reply('Send me a sticker or type "hi" to greet me.');
  }

  @On('sticker')
  async onSticker(@Ctx() ctx) {
    await ctx.reply('👍');
  }

  @Hears('hi')
  async hearsHi(@Ctx() ctx) {
    await ctx.reply('Hey there');
  }

  @Hears('/products')
  async listProducts(@Ctx() ctx) {
    const products = await this.productsService.findAll();
    const message = products.map(p => `${p.name}: $${p.price}`).join('\n');
    await ctx.reply(message);
  }

  // ... add more handlers as needed
}
