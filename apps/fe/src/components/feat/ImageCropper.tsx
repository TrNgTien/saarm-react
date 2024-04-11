import { useRef, useState } from 'react';
import Cropper from 'react-easy-crop';
import 'react-image-crop/dist/ReactCrop.css'; // Import styles

function ImageCropper({
  imageSrc,
  onCropComplete,
}: {
  imageSrc: string;
  onCropComplete: any;
}) {
  const [crop, setCrop] = useState({
    x: 0,
    y: 0,
  }); // Initial aspect ratio (optional)

  const handleImageChange = (crop: any) => setCrop(crop);

  const handleCropComplete = () => {
    const croppedImage = webcamRef.current.getCroppedImage(crop); // Access cropped image using webcamRef
    onCropComplete(croppedImage); // Pass cropped image data
  };
  const [zoom, setZoom] = useState(1);

  // Assuming webcamRef is passed as a prop from ImageCapture (explained later)
  const webcamRef = useRef<any>(null);

  return (
    <div>
      {imageSrc && (
        <div>
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={4 / 3}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
          <button onClick={handleCropComplete}>Crop</button>
        </div>
      )}
    </div>
  );
}

export default ImageCropper;
