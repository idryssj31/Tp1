import { NestFactory } from '@nestjs/core';
import { HelloProducerModule } from './hello-producer.module';

async function bootstrap() {
  const app = await NestFactory.create(HelloProducerModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
