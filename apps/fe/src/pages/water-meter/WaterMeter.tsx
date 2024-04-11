import { IconWrapper, PageHeader } from '@/components';
import { Color, Style } from '@/theme';
import clsx from 'clsx';
import { useCallback, useMemo, useRef, useState } from 'react';
import { CiImageOn as UploadIcon } from 'react-icons/ci';
import { FiRefreshCcw as FlipIcon } from 'react-icons/fi';
import { IoCameraOutline as Camera } from 'react-icons/io5';
import 'react-image-crop/dist/ReactCrop.css';
import Webcam from 'react-webcam';

console.log('checking ', window.innerHeight * 10);

const WaterMeter = () => {
  const webcamRef = useRef<any>(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [isFrontCamera, setIsFrontCamera] = useState<boolean>(true);

  const videoConstraints = useMemo(() => {
    return {
      width: 1280,
      height: window.innerHeight * 10,
      facingMode: isFrontCamera ? 'user' : 'environment',
    };
  }, [isFrontCamera]);

  const handleFlipCamera = useCallback(() => {
    setIsFrontCamera((prev) => !prev);
  }, []);

  // function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setCrop(undefined); // Makes crop preview update between images.
  //     const reader = new FileReader();
  //     reader.addEventListener('load', () =>
  //       setImgSrc(reader.result?.toString() || ''),
  //     );
  //     reader.readAsDataURL(e.target.files[0]);
  //   }
  // }

  // const capture = useCallback(() => {
  //   const imageSrc = webcamRef?.current?.getScreenshot();
  //   setImgSrc(imageSrc);
  // }, [webcamRef, setImgSrc]);

  return (
    <div className="flex flex-col">
      <PageHeader title={'Chup anh'} />
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <div className={clsx(Style.FLEX_BETWEEN, 'mt-4 p-4')}>
        <label className={clsx(Style.FLEX_COL_CENTER)} htmlFor="upload-file">
          <IconWrapper size={24}>
            <UploadIcon />
          </IconWrapper>
          <input type="file" name="upload-file" id="upload-file" hidden />
        </label>
        <div className="rounded-full bg-black-900 p-4 border-4 border-white-20">
          <Camera color={Color.MAIN_WHITE} size={24} className="size-full" />
        </div>
        <div className={clsx(Style.FLEX_COL_CENTER)} onClick={handleFlipCamera}>
          <IconWrapper size={24}>
            <FlipIcon />
          </IconWrapper>
        </div>
        <input
          type="file"
          accept="image/png, image/gif, image/jpeg"
          name="upload-file"
          id="upload-file"
          hidden
        />
      </div>
    </div>
  );
};

export default WaterMeter;

// <ReactCrop
//   locked
//   onDragStart={() => {}}
//   onDragEnd={() => {}}
//   crop={crop}
//   onChange={(c) => setCrop(c)}>
//   <Webcam
//     audio={false}
//     height={720}
//     ref={webcamRef}
//     screenshotFormat="image/jpeg"
//     width={1280}
//     videoConstraints={videoConstraints}
//   />
// </ReactCrop>
// <button onClick={capture}>Capture photo</button>
