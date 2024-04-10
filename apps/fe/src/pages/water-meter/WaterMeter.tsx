import { CameraButton, PageHeader } from '@/components';
import { useCallback, useRef, useState } from 'react';
import { Location, useLocation } from 'react-router-dom';
import Webcam from 'react-webcam';
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

const WaterMeter = () => {
  const { state }: Location<{ headerTitle: string }> = useLocation();
  const webcamRef = useRef<any>(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef?.current?.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <div>
      <PageHeader title={state.headerTitle} />
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />

      <button onClick={capture}>Capture photo</button>
      {imgSrc && <img src={imgSrc} />}
      <input type="file" accept="image/*" capture="user" />
    </div>
  );
};

export default WaterMeter;
