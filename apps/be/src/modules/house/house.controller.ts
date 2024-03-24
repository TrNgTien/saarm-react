import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Houses')
@Controller({
  path: 'houses',
})
export class HouseController {
  @Get()
  getHouses(): string {
    return 'billings WORKED!!';
  }

  @Get(':id')
  getRoomById(@Param('id') id: number) {
    return '';
  }

  @Patch(':id')
  updateRoomById(@Param('id') id: number) {
    return;
  }

  @Post('')
  create(): string {
    return '';
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    console.log('checking update rooms [id]', id);
    return '';
  }
}
