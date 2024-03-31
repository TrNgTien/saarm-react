import { CloudVisionService } from '@/services/cloud-vision';
import { Module } from '@nestjs/common';
import { DetectionController } from './detection.controller';
import { DetectionService } from './detection.service';

@Module({
  imports: [],
  controllers: [DetectionController],
  providers: [DetectionService, CloudVisionService],
})
export class DetectionModule {}
