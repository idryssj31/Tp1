import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { GreeterServiceModule } from './greeter-service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    GreeterServiceModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'hello',
        protoPath: join(process.cwd(), 'proto', 'hello.proto'),
        url: process.env.GRPC_URL ?? '0.0.0.0:50051',
      },
    },
  );
  await app.listen();
}
bootstrap();
