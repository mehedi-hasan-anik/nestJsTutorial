import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get('/single')
  getUser(): string {
    return this.UserService.getUser();
  }
}
