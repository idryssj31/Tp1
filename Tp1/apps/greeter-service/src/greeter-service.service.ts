import { Injectable } from '@nestjs/common';

@Injectable()
export class GreeterServiceService {
  sayHello(name: string): { message: string } {
    return { message: `Hello ${name}` };
  }
}