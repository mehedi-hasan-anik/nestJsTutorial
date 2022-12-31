import { Module } from '@nestjs/common';
import { bookModule } from './Books/books.module';
import { userModule } from './User/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [bookModule, userModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
