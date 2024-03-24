import { RoomDto } from '@/models';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RoomService } from './room.service';

@ApiTags('Rooms')
@Controller('rooms')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Get()
  getRooms(): string[] {
    return this.roomService.getRooms();
  }

  @Get(':id')
  getRoomById(@Param('id') id: number): string {
    return this.roomService.getRoomById({ id });
  }

  @Patch(':id')
  updateRoomById(@Param('id') id: number): string {
    return this.roomService.updateRoomById({ id });
  }

  @Post('')
  create(
    @Body()
    payload: RoomDto,
  ) {
    return this.roomService.create(payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    console.log('checking update rooms [id]', id);
    return this.roomService.delete({ id });
  }
}
