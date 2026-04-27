import { Test, TestingModule } from '@nestjs/testing';
import { GreeterServiceController } from './greeter-service.controller';
import { GreeterServiceService } from './greeter-service.service';

describe('GreeterServiceController', () => {
  let greeterServiceController: GreeterServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GreeterServiceController],
      providers: [GreeterServiceService],
    }).compile();

    greeterServiceController = app.get<GreeterServiceController>(GreeterServiceController);
  });

  describe('sayHello', () => {
    it('should return a greeting message', () => {
      expect(greeterServiceController.sayHello({ name: 'Nest' })).toEqual({
        message: 'Hello Nest',
      });
    });
  });
});
