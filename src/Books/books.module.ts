import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from 'src/loggermiddleware.middleware';
import { booksController } from './books.controller';
import { booksService } from './books.service';

@Module({
  imports: [],
  controllers: [booksController],
  providers: [booksService],
})
export class bookModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('book');
  }
}
