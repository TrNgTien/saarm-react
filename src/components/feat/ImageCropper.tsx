import { EMethods } from '@/common';
import { RestEndpoints } from '@/common/constants';
import { networkInstance } from '@/services';
import 'cropperjs/dist/cropper.css';
import React, { Dispatch, useCallback, useRef, useState } from 'react';
import Cropper, { ReactCropperElement } from 'react-cropper';
import { Button } from '../common';

interface IImageCropperProps {
  imageSrc: string | undefined;
  setImageBase64: Dispatch<string | undefined>;
}

function ImageCropper({ imageSrc, setImageBase64 }: IImageCropperProps) {
  const [imgCropped, setImgCropped] = useState('');

  const cropperRef = useRef<ReactCropperElement>(null);

  const getCropData = useCallback(() => {
    if (typeof cropperRef.current?.cropper === 'undefined') {
      return;
    }

    setImgCropped(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
  }, [cropperRef]);

  const handleSubmitImage = useCallback(async () => {
    try {
      if (!imgCropped) {
        throw Error('Cannot get image cropped');
      }

      const waterMeter = await networkInstance.send({
        method: EMethods.POST,
        path: RestEndpoints.SUBMIT_WATER_METER,
        body: { file: imgCropped },
      });

      console.log('checki', waterMeter);
    } catch (e) {
      console.error('[handleSubmitImage] | %s', e);
    }
  }, [imgCropped]);

  return (
    <div>
      {imgCropped ? (
        <React.Fragment>
          <img className="w-full" src={imgCropped} alt="cropped" />
          <Button
            onClick={() => {
              setImgCropped('');
              setImageBase64('');
            }}
            title="Retake"
            btnStyles="mx-auto border mt-4"
            titleStyles=""
          />
          <Button
            onClick={handleSubmitImage}
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
