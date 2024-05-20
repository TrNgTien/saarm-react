import { EMethods } from '@/common';
import { RestEndpoints, RoutePath } from '@/common/constants';
import { getDecodedToken } from '@/helpers';
import { cn } from '@/lib/utils';
import { networkInstance } from '@/services';
import { Styles } from '@/theme';
import 'cropperjs/dist/cropper.css';
import { useSnackbar } from 'notistack';
import React, { Dispatch, useCallback, useMemo, useRef, useState } from 'react';
import Cropper, { ReactCropperElement } from 'react-cropper';
import { useNavigate } from 'react-router-dom';
import { Button } from '../common';
import { Loading } from '../loading';

interface IImageCropperProps {
  imageSrc: string | undefined;
  setImageBase64: Dispatch<string | undefined>;
}

function ImageCropper({ imageSrc, setImageBase64 }: IImageCropperProps) {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [imgCropped, setImgCropped] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [waterDetected, setWaterDetected] = useState<string>('');
  const token = useMemo(getDecodedToken, [getDecodedToken]);

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
        path: `${RestEndpoints.ROOM}/${token?.roomId}/${RestEndpoints.DETECT_WATER_METER}`,
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
  }, [imgCropped, token]);

  const confirmWaterNumber = useCallback(async () => {
    try {
      setIsLoading(true);

      const rs = await networkInstance.send({
        method: EMethods.POST,
        path: `${RestEndpoints.ROOM}/${token?.roomId}/${RestEndpoints.SUBMIT_WATER_METER}`,
        body: { waterMeter: waterDetected },
      });

      const message = !rs.success
        ? 'Vui lòng thử lại!'
        : `Cập nhật thành công!`;
      setIsLoading(false);

      enqueueSnackbar(message, {
        variant: !rs.success ? 'error' : 'success',
      });

      if (rs.success) {
        setTimeout(() => {
          navigate(RoutePath.HOME);
        }, 1000);
      }

      setIsLoading(false);
    } catch (e: any) {
      console.error('[confirmWaterNumber] | %s', e);

      setTimeout(() => {
        setIsLoading(false);
        enqueueSnackbar(`${e.toString().split(':')[1]}`, {
          variant: 'error',
        });
      }, 1000);
    }
  }, [token, waterDetected]);

  return (
    <div>
      {isLoading && <Loading />}
      {imgCropped ? (
        <React.Fragment>
          <img
            className="rounded-lg mx-auto my-10"
            width={250}
            height={250}
            src={imgCropped}
            alt="cropped"
          />
          {waterDetected ? (
            <div className="text-center mt-8">
              <div>
                <h1 className="font-semibold text-xl">Số nước ghi nhận:</h1>
                <p className="text-green-80 text-3xl font-bold">
                  {waterDetected}
                </p>
              </div>
              <div className={cn(Styles.FLEX_AROUND, 'mt-24')}>
                <Button
                  onClick={() => setImageBase64('')}
                  title="Chụp lại"
                  btnStyles="w-5/12 border mt-4"
                  titleStyles=""
                />
                <Button
                  onClick={confirmWaterNumber}
                  title="Xác nhận"
                  btnStyles="w-5/12 border mt-4 bg-green-300"
                  titleStyles=""
                />
              </div>
            </div>
          ) : (
            <>
              <Button
                onClick={handleSubmitImage}
                title="Gửi ảnh"
                btnStyles="w-full border mt-4"
                titleStyles=""
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
            </>
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
