import { Controller, Get } from '@nestjs/common';
import { HelloProducerService } from './hello-producer.service';

@Controller()
export class HelloProducerController {
  constructor(private readonly helloProducerService: HelloProducerService) {}

  @Get()
  getHello(): string {
    return this.helloProducerService.getHello();
  }
}
