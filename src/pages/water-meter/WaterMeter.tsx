import WaterMeterImg from '@/assets/images/crop-guide.jpeg';
import { CameraButton, InformationCard, PageHeader } from '@/components';
import ImageCropper from '@/components/feat/ImageCropper';
import { isValidFileUploaded } from '@/helpers';
import { Styles } from '@/theme';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { useSnackbar } from 'notistack';
import { useCallback, useState } from 'react';

const WaterMeter = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [imageBase64, setImageBase64] = useState<string | undefined>();

  const handlePreviewFile = useCallback(
    (e: any) => {
      if (e.target.files.length < 1) {
        return;
      }
      const reader = new FileReader();
      const file = e.target.files[0];

      if (!isValidFileUploaded(file.type)) {
        return enqueueSnackbar('Chỉ chấp nhận tệp ảnh!', {
          variant: 'error',
        });
      }

      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImageBase64(reader.result?.toString());
      };
    },
    [enqueueSnackbar, isValidFileUploaded],
  );

  return (
    <div className={Styles.FLEX_COL}>
      <PageHeader title={'Cập nhật đồng hồ nước'} />
      <div className={clsx(Styles.FLEX_BETWEEN, 'mt-4 p-4')}>
        {imageBase64 ? (
          <div className="w-full">
            <ImageCropper
              imageSrc={imageBase64}
              setImageBase64={setImageBase64}
            />
          </div>
        ) : (
          <div className="w-full">
            <label
              htmlFor="upload-file"
              className={clsx(
                Styles.FLEX_BETWEEN,
                'relative bg-green-300 rounded-lg p-6 w-11/12 shadow-md',
              )}>
              <div>
                <h1 className="font-semibold text-xl">
                  {`Tháng ${dayjs().month()}/${dayjs().year()}`}
                </h1>
                <p className="font-normal mt-2 text-xs">Bấm để tải ảnh lên</p>
              </div>
              <span className="absolute right-[-20px]">
                <CameraButton />
                <input
                  type="file"
                  name="upload-file"
                  id="upload-file"
                  accept="image/*"
                  hidden
                  onChange={handlePreviewFile}
                />
              </span>
            </label>
            <div className="mt-10">
              <h1 className="font-semibold text-xl">Lịch sử cập nhật</h1>
              {Array.from({ length: 10 }).map((_, index) => {
                return (
                  <div key={index}>
                    <InformationCard imgSrc={WaterMeterImg} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaterMeter;
