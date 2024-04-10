import WaterMeter from '@/assets/icons/water-meter.svg';
import { RoutePath } from '@/common/constants';
import { useNavigate } from 'react-router-dom';

export const Banner = () => {
  const navigate = useNavigate();

  return (
    <div
      className="rounded-2xl flex items-center justify-between bg-white-10 h-2/6"
      onClick={() =>
        navigate(RoutePath.WATER_METER, {
          state: {
            headerTitle: 'Chụp ảnh',
          },
        })
      }>
      <div className="text-black-900 pl-6">
        <p className="font-medium leading-5 mb-1">
          Đã đến hạn cập nhật chỉ số nước!
        </p>
        <span className="bg-green-80 py-1 px-4 text-white-10 text-xs rounded-lg">
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
