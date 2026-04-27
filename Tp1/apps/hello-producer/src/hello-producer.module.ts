import { Module } from '@nestjs/common';
import { HelloProducerController } from './hello-producer.controller';
import { HelloProducerService } from './hello-producer.service';

@Module({
  imports: [],
  controllers: [HelloProducerController],
  providers: [HelloProducerService],
})
export class HelloProducerModule {}
