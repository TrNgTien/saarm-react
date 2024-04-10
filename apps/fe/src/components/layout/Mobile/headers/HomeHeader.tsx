import { RoutePath } from '@/common/constants';
import { IconWrapper } from '@/components/common';
import { Color, Style } from '@/theme';
import { memo } from 'react';
import { IoMdNotificationsOutline as NotificationIcon } from 'react-icons/io';
import { MdOutlineHomeWork as RoomIcon } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div
      className={`${Style.FLEX_BETWEEN} ${Style.Z_INDEX} p-4 leading-4 bg-[#0A150F]`}>
      <div className={Style.FLEX_CENTER}>
        <IconWrapper size={24} color={Color.MAIN_WHITE}>
          <RoomIcon />
        </IconWrapper>
        <div className="p-2">
          <p className="text-white-10 text-md">Phòng A1</p>
          <p className="text-black-500 text-xs">24 Linh Trung, Thủ Đức</p>
        </div>
      </div>
      <div className={Style.FLEX_BETWEEN}>
        <IconWrapper
          size={24}
          hasAmount
          color={Color.MAIN_WHITE}
          onClick={() => navigate(RoutePath.NOTIFICATION)}>
          <NotificationIcon />
        </IconWrapper>
        <img
          src={
            'https://cdn.popsww.com/blog/sites/2/2023/02/cac-nhan-vat-trong-boruto-2.jpg'
          }
          loading="lazy"
          alt={'Avatar'}
          className="ml-2 w-8 h-8 rounded-full object-cover border border-white-20 bg-gray-200"
        />
      </div>
    </div>
  );
};

export default memo(Header);