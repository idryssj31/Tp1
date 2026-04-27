import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { GreeterServiceService } from './greeter-service.service';

interface HelloRequest {
  name: string;
}

interface HelloReply {
  message: string;
}

@Controller()
export class GreeterServiceController {
  constructor(private readonly greeterServiceService: GreeterServiceService) {}

  @GrpcMethod('Greeter', 'SayHello')
  sayHello(data: HelloRequest): HelloReply {
    return this.greeterServiceService.sayHello(data.name);
  }
}