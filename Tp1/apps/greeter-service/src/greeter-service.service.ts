import { Injectable } from '@nestjs/common';

@Injectable()
export class GreeterServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
