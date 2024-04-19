import { useRef, useState } from 'react';
import ReactCrop, { Crop, PixelCrop } from 'react-image-crop';

function ImageCropper({
  imageSrc,
  onCropComplete,
}: {
  imageSrc: string | undefined;
  onCropComplete?: any;
}) {
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState<Crop>({
    unit: '%',
    width: 50,
    height: 50,
    x: 25,
    y: 25,
  });

  const handleImageChange = (crop: any) => setCrop(crop);

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

  // Assuming webcamRef is passed as a prop from ImageCapture (explained later)
  return (
    <div>
      {imageSrc && (
        <div>
          <ReactCrop
            crop={crop}
            locked
            onChange={(_, percentCrop) => handleImageChange(percentCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            aspect={16 / 9}
            keepSelection
            minHeight={100}>
            <img src={imageSrc} />
          </ReactCrop>
          <button onClick={handleDection}>Crop</button>
        </div>
      )}
    </div>
  );
}

export default ImageCropper;
