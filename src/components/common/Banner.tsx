import WaterMeter from '@/assets/icons/water-meter.svg';
import { EMethods } from '@/common';
import { RestEndpoints, RoutePath } from '@/common/constants';
import { getDecodedToken } from '@/helpers';
import { useAppDispatch } from '@/hooks';
import { setIsSubmitWater } from '@/redux/slices/room.slice';
import { networkInstance } from '@/services';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SkeletonWrapper } from '../ui';

export const Banner = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const token = useMemo(() => getDecodedToken(), [getDecodedToken]);
  const [isSubmittedWaterMeter, setIsSubmittedWaterMeter] =
    useState<boolean>(false);

  useEffect(() => {
    getIsSumittedWaterMeter();
  }, []);

  const getIsSumittedWaterMeter = useCallback(async () => {
    try {
      setIsLoading(true);
      const rs = await networkInstance.send({
        method: EMethods.GET,
        path: `${RestEndpoints.ROOM}/${token?.roomId}/${RestEndpoints.IS_SUBMIT_WATER_METER}`,
      });

      if (!rs.data) {
        return;
      }

      dispatch(setIsSubmitWater(rs.data));
      setIsSubmittedWaterMeter(rs.data);
    } catch (e) {
      setIsLoading(false);
      console.error('[getIsSumittedWaterMeter]: | %s', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return isLoading ? (
    <SkeletonWrapper stylesOverride="mt-2" />
  ) : isSubmittedWaterMeter ? null : (
    <div
      className="rounded-2xl flex items-center justify-between bg-white-10 xs:h-2/5 sm:h-2/5 lsm:h-2/5"
      onClick={() => navigate(RoutePath.WATER_METER)}>
      <div className="text-black-900 ml-6 xs:pt-2 sm:pt-2 h-full">
        <p className="font-medium xs:text-sm leading-5">
          Đã đến hạn cập nhật chỉ số nước!
        </p>
        <span className="bg-green-80 py-1 px-4 text-white-10 text-xs rounded-md">
          Chụp ảnh
        </span>
      </div>
      <img
        src={WaterMeter}
        alt="water-meter-icon"
        loading="lazy"
        className="rounded-2xl h-full"
      />
    </div>
  );
};
