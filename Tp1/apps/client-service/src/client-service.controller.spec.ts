import { Test, TestingModule } from '@nestjs/testing';
import { ClientServiceController } from './client-service.controller';
import { ClientServiceService } from './client-service.service';

describe('ClientServiceController', () => {
  let clientServiceController: ClientServiceController;
  let clientServiceService: ClientServiceService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ClientServiceController],
      providers: [ClientServiceService],
    }).compile();

    clientServiceController = app.get<ClientServiceController>(ClientServiceController);
    clientServiceService = app.get<ClientServiceService>(ClientServiceService);
  });

  describe('getHome', () => {
    it('should return a classic hello world HTML page', () => {
      expect(clientServiceController.getHome()).toBe('<h1>Hello World</h1>');
    });
  });

  describe('sayHello', () => {
    it('should call gRPC greeting and return response', async () => {
      jest
        .spyOn(clientServiceService, 'sayHello')
        .mockResolvedValue({ message: 'Hello Nest' });

      await expect(clientServiceController.sayHello('Nest')).resolves.toEqual({
        message: 'Hello Nest',
      });
    });
  });
});
