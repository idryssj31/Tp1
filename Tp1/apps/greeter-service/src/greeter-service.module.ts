import { Module } from '@nestjs/common';
import { GreeterServiceController } from './greeter-service.controller';
import { GreeterServiceService } from './greeter-service.service';

@Module({
  imports: [],
  controllers: [GreeterServiceController],
  providers: [GreeterServiceService],
})
export class GreeterServiceModule {}
