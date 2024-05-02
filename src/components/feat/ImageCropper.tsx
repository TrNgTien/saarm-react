import { EMethods } from '@/common';
import { RestEndpoints } from '@/common/constants';
import { networkInstance } from '@/services';
import 'cropperjs/dist/cropper.css';
import { useSnackbar } from 'notistack';
import React, { Dispatch, useCallback, useRef, useState } from 'react';
import Cropper, { ReactCropperElement } from 'react-cropper';
import { Button } from '../common';
import { Loading } from '../loading';

interface IImageCropperProps {
  imageSrc: string | undefined;
  setImageBase64: Dispatch<string | undefined>;
}

function ImageCropper({ imageSrc, setImageBase64 }: IImageCropperProps) {
  const { enqueueSnackbar } = useSnackbar();
  const [imgCropped, setImgCropped] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [waterDetected, setWaterDetected] = useState<number>();

  const cropperRef = useRef<ReactCropperElement>(null);

  const getCropData = useCallback(() => {
    if (typeof cropperRef.current?.cropper === 'undefined') {
      return;
    }

    setImgCropped(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
  }, [cropperRef]);

  const handleSubmitImage = useCallback(async () => {
    try {
      setIsLoading(true);
      if (!imgCropped) {
        throw Error('Cannot get image cropped');
      }

      const rs = await networkInstance.send({
        method: EMethods.POST,
        path: `${RestEndpoints.ROOM}/2/${RestEndpoints.SUBMIT_WATER_METER}`,
        body: { croppedFile: imgCropped, originalFile: imageSrc },
      });

      if (!rs.data?.[0]) {
        throw Error('Không nhận diện được, vui lòng chọn ảnh khác!');
      }

      setWaterDetected(rs.data[0]);

      setIsLoading(false);
    } catch (e: any) {
      console.error('[handleSubmitImage] | %s', e);
      setTimeout(() => {
        setIsLoading(false);
        enqueueSnackbar(`${e.toString().split(':')[1]}`, {
          variant: 'error',
        });
      }, 1000);
    }
  }, [imgCropped]);

  return (
    <div>
      {isLoading && <Loading />}
      {imgCropped ? (
        <React.Fragment>
          <img className="w-full" src={imgCropped} alt="cropped" />
          {waterDetected ? (
            <div className="text-center mt-8">
              <h1>Số nhận diện được:</h1>
              <p>{waterDetected}</p>
            </div>
          ) : (
            <Button
              onClick={handleSubmitImage}
              title="Gửi ảnh"
              btnStyles="w-full border mt-4"
              titleStyles=""
            />
          )}
        </React.Fragment>
      ) : (
        imageSrc && (
          <div>
            <Cropper
              ref={cropperRef}
              style={{ height: 400, width: '100%' }}
              initialAspectRatio={1}
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
              onClick={() => {
                setImgCropped('');
                setImageBase64('');
              }}
              title="Chọn lại ảnh"
              btnStyles="mx-auto border mt-4 select-none"
              titleStyles=""
            />
            <Button
              onClick={getCropData}
              title="Xác nhận vùng đã chọn"
              btnStyles="mx-auto border mt-4 select-none"
              titleStyles=""
            />
          </div>
        )
      )}
    </div>
  );
}

export default ImageCropper;
