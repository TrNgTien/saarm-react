import { RoutePath } from '@/common/constants';
import { Color } from '@/theme';
import { IoMdNotificationsOutline as NotificationIcon } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 flex items-center justify-between p-4 bg-[#0A150F] leading-4 z-100">
      <div className="flex items-center">
        <img
          src={
            'https://cdn.popsww.com/blog/sites/2/2023/02/cac-nhan-vat-trong-boruto-2.jpg'
          }
          alt={'Avatar'}
          className="w-12 h-12 rounded-full object-cover border border-white-20 bg-gray-200"
        />
        <div className="p-2">
          <p className="text-white-10 text-md">Tien Tran</p>
          <p className="text-black-500 text-xs">trngtien.dev@gmail.com</p>
        </div>
      </div>
      <NotificationIcon
        size={30}
        color={Color.MAIN_WHITE}
        onClick={() => navigate(RoutePath.NOTIFICATION)}
      />
    </div>
  );
};

export default Header;
