import { NestFactory } from '@nestjs/core';
import { GreeterServiceModule } from './greeter-service.module';

async function bootstrap() {
  const app = await NestFactory.create(GreeterServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
