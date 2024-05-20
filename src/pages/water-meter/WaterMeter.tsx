import WaterMeterImg from '@/assets/images/crop-guide.jpeg';
import { EMethods, IHistory } from '@/common';
import { RestEndpoints } from '@/common/constants';
import { CameraButton, InformationCard, PageHeader } from '@/components';
import ImageCropper from '@/components/feat/ImageCropper';
import { MAX_FILE_SIZE, getDecodedToken, isValidFileUploaded } from '@/helpers';
import { useAppSelector } from '@/hooks';
import { cn } from '@/lib/utils';
import { networkInstance } from '@/services';
import { Styles } from '@/theme';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { useSnackbar } from 'notistack';
import { useCallback, useEffect, useMemo, useState } from 'react';

const WaterMeter = () => {
  const { enqueueSnackbar } = useSnackbar();
  const isSubmitWater = useAppSelector((state) => state.room.isSubmitWater);
  const token = useMemo(getDecodedToken, [getDecodedToken]);
  const [histories, setHistories] = useState<IHistory[] | undefined>([]);
  const [imageBase64, setImageBase64] = useState<string | undefined>();

  const getHistorySubmit = useCallback(async () => {
    const rs = await networkInstance.send({
      method: EMethods.GET,
      path: `${RestEndpoints.ROOM}/${token?.roomId}/${RestEndpoints.HISTORY_WATER_METER}`,
    });

    if (!rs.success) {
      return;
    }

    setHistories(rs.data);
  }, []);

  useEffect(() => {
    getHistorySubmit();
  }, []);

  const handlePreviewFile = useCallback(
    (e: any) => {
      const fileList: FileList = e.target.files;
      if (!fileList.length) {
        return;
      }

      const file = fileList[0];

      if (file.size > MAX_FILE_SIZE) {
        return enqueueSnackbar(`Tệp không được lớn hơn ${MAX_FILE_SIZE}mb!`, {
          variant: 'error',
        });
      }

      if (!isValidFileUploaded(file.type)) {
        return enqueueSnackbar(
          'Chỉ chấp nhận tệp ảnh loại png, jpeg, jpg, webp',
          {
            variant: 'error',
          },
        );
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImageBase64(reader.result?.toString());
      };
    },
    [enqueueSnackbar],
  );

  return (
    <div className={Styles.FLEX_COL}>
      <PageHeader title={'Cập nhật đồng hồ nước'} />
      <div className={clsx(Styles.FLEX_BETWEEN, 'mt-2 p-4')}>
        {imageBase64 ? (
          <div className="w-full">
            <ImageCropper
              imageSrc={imageBase64}
              setImageBase64={setImageBase64}
            />
          </div>
        ) : (
          <div className="w-full">
            {!isSubmitWater && (
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
            )}
            <div className={cn(!isSubmitWater && 'mt-10')}>
              <h1 className="font-semibold text-xl">Lịch sử cập nhật</h1>
              {histories?.length
                ? histories.map((item) => {
                    return (
                      <div key={item.id}>
                        <InformationCard imgSrc={WaterMeterImg} {...item} />
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaterMeter;
