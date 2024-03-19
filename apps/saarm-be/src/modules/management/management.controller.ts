import { Controller, Get } from '@nestjs/common';

@Controller()
export class ManagementController {
  @Get('managements')
  getHello(): string {
    return 'DETECTIONS WORKED!!';
  }
}
