import WaterMeter from '@/assets/icons/water-meter.svg';
import { Link } from 'react-router-dom';
export const Banner = () => {
  return (
    <div className="rounded-2xl flex items-center justify-between bg-white-10 h-2/6">
      <div className="text-black-900 pl-8">
        <p className="font-medium leading-5 mb-1">
          Đã đến hạn cập nhật chỉ số nước!
        </p>
        <Link
          className="bg-green-80 py-1 px-4 text-white-10 text-xs rounded-lg"
          to={'/camera'}>
          Chụp ảnh
        </Link>
      </div>
      <img src={WaterMeter} className="rounded-2xl h-full" />
    </div>
  );
};
