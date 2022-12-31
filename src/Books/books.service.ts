import { Injectable } from '@nestjs/common';

@Injectable()
export class booksService {
  getBook(): string {
    return 'take book';
  }
}
