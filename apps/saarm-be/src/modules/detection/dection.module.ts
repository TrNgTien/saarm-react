import { Module } from '@nestjs/common';
import { DetectionController } from './detection.controller';

@Module({
  imports: [],
  controllers: [DetectionController],
  providers: [],
})
export class DetectionModule {}
