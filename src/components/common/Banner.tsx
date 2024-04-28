import WaterMeter from '@/assets/icons/water-meter.svg';
import { RoutePath } from '@/common/constants';
import { useNavigate } from 'react-router-dom';

export const Banner = () => {
  const navigate = useNavigate();

  return (
    <div
      className="rounded-2xl flex items-center justify-between bg-white-10 xs:h-2/5 sm:h-2/5 lsm:h-2/6"
      onClick={() => navigate(RoutePath.WATER_METER)}>
      <div className="text-black-900 ml-6 xs:pt-2 sm:pt-4 h-full">
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
