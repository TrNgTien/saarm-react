import { Controller, Get } from '@nestjs/common';

@Controller()
export class AuthController {
  @Get('detections')
  getHello(): string {
    return 'DETECTIONS WORKED!!';
  }
}
