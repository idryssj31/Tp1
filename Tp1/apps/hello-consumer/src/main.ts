import { NestFactory } from '@nestjs/core';
import { HelloConsumerModule } from './hello-consumer.module';

async function bootstrap() {
  const app = await NestFactory.create(HelloConsumerModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
