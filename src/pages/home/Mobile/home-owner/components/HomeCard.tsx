import { cn } from '@/lib/utils';
import Avatar from '@/assets/icons/avatar.svg';
import { Styles } from '@/theme';

export const HomeCard = () => {
  return (
    <div className={cn(Styles.FLEX_BETWEEN, "border shadow-md my-4 rounded-lg p-4 text-black-500")}>
      <div className="p-4 border rounded-lg">
        <img src={Avatar} />
      </div>
      <div className="flex-1 ml-2">
        <p>Nhà trọ Thanh Lịch</p>
        <p>Thủ Đức, TP.Hồ Chí Minh</p>
        <div>
          <p>Phòng trống:</p>
        </div>
      </div>
    </div>
  );
};
