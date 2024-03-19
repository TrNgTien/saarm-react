import { Controller, Get } from '@nestjs/common';

@Controller()
export class DetectionController {
  @Get('detections')
  getHello(): string {
    return 'DETECTIONS WORKED!!';
  }
}
