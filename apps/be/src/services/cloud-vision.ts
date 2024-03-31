import vision, { ImageAnnotatorClient } from '@google-cloud/vision';
import { google } from '@google-cloud/vision/build/protos/protos';
import { Injectable } from '@nestjs/common';
import { resolve } from 'path';

@Injectable()
export class CloudVisionService {
  private readonly client: ImageAnnotatorClient;
  private readonly pathData: string;

  constructor() {
    this.pathData = resolve(__dirname, `../../../be/resources/img.jpeg`);

    const googleKeys = resolve(__dirname, `../../../be/google-vision.json`);

    this.client = new vision.ImageAnnotatorClient({
      keyFilename: googleKeys,
    });
  }

  async extractText(): Promise<google.cloud.vision.v1.IEntityAnnotation[]> {
    const [result] = await this.client.textDetection(this.pathData);
    return result.textAnnotations ?? [];
  }
}
