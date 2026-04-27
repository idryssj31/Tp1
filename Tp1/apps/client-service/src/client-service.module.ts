import { join } from 'path';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ClientServiceController } from './client-service.controller';
import { ClientServiceService } from './client-service.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GREETER_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'hello',
          protoPath: join(process.cwd(), 'proto', 'hello.proto'),
          url: process.env.GREETER_URL ?? 'localhost:50051',
        },
      },
    ]),
  ],
  controllers: [ClientServiceController],
  providers: [ClientServiceService],
})
export class ClientServiceModule {}
