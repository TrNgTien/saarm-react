import { CloudVisionService } from '@/services/cloud-vision';
import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class DetectionService {
  constructor(private cloudVisionService: CloudVisionService) {}
  async getWaterMeter() {
    const result = await this.cloudVisionService.extractText();

    const data = [];
    for (const d of result) {
      if (isNaN(Number(d?.description))) {
        continue;
      }

      data.push(d.description);
    }

    return data;
  }
}
