import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import type { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom, Observable } from 'rxjs';

interface HelloRequest {
  name: string;
}

interface HelloReply {
  message: string;
}

interface GreeterGrpcService {
  sayHello(data: HelloRequest): Observable<HelloReply>;
}

@Injectable()
export class ClientServiceService implements OnModuleInit {
  private greeterService!: GreeterGrpcService;

  constructor(@Inject('GREETER_PACKAGE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.greeterService = this.client.getService<GreeterGrpcService>('Greeter');
  }

  async sayHello(name: string): Promise<HelloReply> {
    return firstValueFrom(this.greeterService.sayHello({ name }));
  }
}
