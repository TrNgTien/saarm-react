import { useRef, useState } from 'react';
import Webcam from 'react-webcam';

function ImageCapture() {
  const webcamRef = useRef<any>(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const captureImage = () => {
    const imageSrc = webcamRef?.current?.getScreenshot();
    setCapturedImage(imageSrc);
  };

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={captureImage}>Capture Image</button>
      {capturedImage && <img src={capturedImage} alt="Captured" />}
    </div>
  );
}
