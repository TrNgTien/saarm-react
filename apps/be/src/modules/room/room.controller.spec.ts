import { Test } from '@nestjs/testing';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';

describe('GIVEN RoomController', () => {
  let roomController: RoomController;
  let roomService: RoomService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [RoomController],
      providers: [RoomService],
    }).compile();

    roomService = moduleRef.get<RoomService>(RoomService);
    roomController = moduleRef.get<RoomController>(RoomController);
  });

  describe('GIVEN getRooms', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
      jest.spyOn(roomService, 'getRooms').mockImplementation(() => result);

      expect(roomController.getRooms()).toBe(result);
    });
  });

  describe('GIVEN getRooms', () => {
    it('should return an array of rooms', async () => {
      const result = ['test'];

      expect(roomController.getRooms()).toBe(result);
    });
  });
});
