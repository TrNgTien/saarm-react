import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DetectionService } from './detection.service';

@ApiTags('Detections')
@Controller('detections')
export class DetectionController {
  constructor(private detectionService: DetectionService) {}

  @Get()
  getWaterMeter() {
    return this.detectionService.getWaterMeter();
  }
}
