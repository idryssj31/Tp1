import { Controller, Get } from '@nestjs/common';
import { GreeterServiceService } from './greeter-service.service';

@Controller()
export class GreeterServiceController {
  constructor(private readonly greeterServiceService: GreeterServiceService) {}

  @Get()
  getHello(): string {
    return this.greeterServiceService.getHello();
  }
}
