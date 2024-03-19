import { Module } from '@nestjs/common';
import { ManagementController } from './management.controller';

@Module({
  imports: [],
  controllers: [ManagementController],
  providers: [],
})
export class ManagementModule {}
