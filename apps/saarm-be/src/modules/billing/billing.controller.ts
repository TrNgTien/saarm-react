import { Controller, Get } from '@nestjs/common';

@Controller()
export class BillingController {
  @Get('billings')
  getHello(): string {
    return 'billings WORKED!!';
  }
}
