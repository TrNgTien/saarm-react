import vision from '@google-cloud/vision';
import { Injectable, Scope } from '@nestjs/common';
import { resolve } from 'path';

@Injectable({ scope: Scope.REQUEST })
export class DetectionService {
  async getWaterMeter() {
    const pathData = resolve(__dirname, `../../../resources/img.jpeg`);
    const googleKeys = resolve(__dirname, `../../../google-vision.json`);

    const client = new vision.ImageAnnotatorClient({
      keyFilename: googleKeys,
    });

    const [result] = await client.textDetection(pathData);

    const labels = result.textAnnotations ?? [];
    const data = [];
    for (const d of labels) {
      if (isNaN(Number(d?.description))) {
        continue;
      }

      data.push(d.description);
    }

    return data;
  }
}
