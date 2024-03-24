// import vision from '@google-cloud/vision';
// import { Injectable } from '@nestjs/common';
// import { resolve } from 'path';
//
// @Injectable()
// export class DetectionService {
//   async getWaterMeter() {
//     // const pathData = resolve(__dirname, `../../../resources/img.jpeg`);
//     const pathData = resolve(__dirname, `../../../resources/test-2.jpg`);
//     const googleKeys = resolve(__dirname, `../../../google-vision.json`);
//     const client = new vision.ImageAnnotatorClient({
//       keyFilename: googleKeys,
//     });
//
//     console.log('pathData: ', pathData);
//
//     const [result] = await client.textDetection(pathData);
//
//     const labels = result.textAnnotations ?? [];
//     const data = [];
//     for (const d of labels) {
//       if (isNaN(Number(d?.description))) {
//         continue;
//       }
//
//       data.push(d.description);
//     }
//     console.log('data: ', data);
//
//     return data;
//   }
// }
