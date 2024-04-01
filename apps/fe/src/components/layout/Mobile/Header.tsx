import { Color } from '@/theme';
import { IoMdNotificationsOutline as NotificationIcon } from 'react-icons/io';

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-[#0A150F] leading-4">
      <div className="flex items-center">
        <img
          src={
            'https://cdn.popsww.com/blog/sites/2/2023/02/cac-nhan-vat-trong-boruto-2.jpg'
          }
          alt={'Avatar'}
          className="w-12 h-12 rounded-full object-cover border-2 border-[#D9D9D9] bg-gray-200"
        />
        <div className="p-2">
          <p className="text-white-10 text-md">Michael Smith</p>
          <p className="text-black-500 text-xs">michaelsmith12@gmail.com</p>
        </div>
      </div>
      <NotificationIcon size={30} color={Color.MAIN_WHITE} />
    </div>
  );
};

export default Header;
