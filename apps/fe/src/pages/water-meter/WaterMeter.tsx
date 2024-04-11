import { IconWrapper, PageHeader } from '@/components';
import { Color, Style } from '@/theme';
import clsx from 'clsx';
import { useRef, useState } from 'react';
import { CiImageOn as UploadIcon } from 'react-icons/ci';
import { IoCameraOutline as Camera } from 'react-icons/io5';
import 'react-image-crop/dist/ReactCrop.css';
import Webcam from 'react-webcam';

console.log('checking ', window.innerHeight * 10);
const videoConstraints = {
  width: 1280,
  height: window.innerHeight * 10,
  facingMode: 'environment',
};

const WaterMeter = () => {
  const webcamRef = useRef<any>(null);
  const [imgSrc, setImgSrc] = useState(null);

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

      <div
        className={clsx(Style.FLEX_AROUND, 'mt-4')}>
        <div className={clsx(Style.FLEX_COL_CENTER)}>
          <IconWrapper size={28}>
            <UploadIcon />
          </IconWrapper>
          <p>Tai anh len</p>
          <input type="file" name="upload-file" id="upload-file" hidden />
        </div>
        <div className="rounded-full bg-black-900 p-6  xs:p-4 top-[-2rem] border-4 border-white-20">
          <IconWrapper size={24} color={Color.MAIN_WHITE}>
            <Camera />
          </IconWrapper>
        </div>
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
