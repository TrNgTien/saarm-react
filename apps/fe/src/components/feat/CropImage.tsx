import { useCallback, useRef, useState } from 'react';
import ReactCrop, { Crop, PixelCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Webcam from 'react-webcam';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'environment',
};

// function centerAspectCrop(
//   mediaWidth: number,
//   mediaHeight: number,
//   aspect: number,
// ) {
//   return centerCrop(
//     makeAspectCrop(
//       {
//         unit: '%',
//         width: 90,
//       },
//       aspect,
//       mediaWidth,
//       mediaHeight,
//     ),
//     mediaWidth,
//     mediaHeight,
//   );
// }

export const CropImage = () => {
  const webcamRef = useRef<any>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const blobUrlRef = useRef('');
  const [imgSrc, setImgSrc] = useState(null);
  const [crop, setCrop] = useState<Crop>({
    unit: '%',
    width: 50,
    height: 50,
    x: 25,
    y: 25,
  });
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();

  async function handleDection() {
    const image = imgRef.current;
    const previewCanvas = previewCanvasRef.current;
    if (!image || !previewCanvas || !completedCrop) {
      throw new Error('Crop canvas does not exist');
    }

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const offscreen = new OffscreenCanvas(
      completedCrop.width * scaleX,
      completedCrop.height * scaleY,
    );
    const ctx = offscreen.getContext('2d');
    if (!ctx) {
      throw new Error('No 2d context');
    }

    ctx.drawImage(
      previewCanvas,
      0,
      0,
      previewCanvas.width,
      previewCanvas.height,
      0,
      0,
      offscreen.width,
      offscreen.height,
    );
    const blob = await offscreen.convertToBlob({
      type: 'image/png',
      quality: 1,
    });

    console.log('check blob', blob);
  }

  const capture = useCallback(() => {
    const imageSrc = webcamRef?.current?.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const retake = useCallback(() => {
    setImgSrc(null);
  }, [webcamRef, setImgSrc]);

  return (
    <div>
      {imgSrc ? (
        <div>
          <img src={imgSrc} />
          <button className="border-2 border-blue-500" onClick={capture}>
            Retake
          </button>
        </div>
      ) : (
        <div>
          <ReactCrop
            crop={crop}
            locked
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            aspect={16 / 9}
            keepSelection
            minHeight={100}
            // circularCrop
          >
            <Webcam
              audio={false}
              height={720}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={1280}
              videoConstraints={videoConstraints}
            />
          </ReactCrop>
          <button className="border-2 border-blue-500" onClick={capture}>
            Capture photo
          </button>
        </div>
      )}
    </div>
  );
};
