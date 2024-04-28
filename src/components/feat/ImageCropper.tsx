import 'cropperjs/dist/cropper.css';
import React, { Dispatch, useCallback, useRef, useState } from 'react';
import Cropper, { ReactCropperElement } from 'react-cropper';
import { Button } from '../common';

function ImageCropper({
  imageSrc,
  setImageBase64,
}: {
  imageSrc: string | undefined;
  onCropComplete?: any;
  setImageBase64: Dispatch<string | undefined>;
}) {
  const [imgCropped, setCropData] = useState('');

  const cropperRef = useRef<ReactCropperElement>(null);

  const getCropData = useCallback(() => {
    if (typeof cropperRef.current?.cropper === 'undefined') {
      return;
    }

    setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
  }, [cropperRef]);

  return (
    <div>
      {imgCropped ? (
        <React.Fragment>
          <img className="w-full" src={imgCropped} alt="cropped" />
          <Button
            onClick={() => {
              setCropData('');
              setImageBase64('');
            }}
            title="Retake"
            btnStyles="mx-auto border mt-4"
            titleStyles=""
          />
          <Button
            onClick={() => {}}
            title="Gui anh"
            btnStyles="w-full border mt-4"
            titleStyles=""
          />
        </React.Fragment>
      ) : (
        imageSrc && (
          <div>
            <Cropper
              ref={cropperRef}
              style={{ height: 400, width: '100%' }}
              initialAspectRatio={1}
              preview=".img-preview"
              src={imageSrc}
              viewMode={1}
              minCropBoxHeight={10}
              minCropBoxWidth={10}
              alt="crop-image"
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
              guides={true}
            />
            <Button
              onClick={getCropData}
              title="Crop"
              btnStyles="w-1/2 mx-auto border border-red-500"
              titleStyles=""
            />
          </div>
        )
      )}
    </div>
  );
}

export default ImageCropper;
