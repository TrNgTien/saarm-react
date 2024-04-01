import { IoMdNotificationsOutline as NotificationIcon } from 'react-icons/io';

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img
          src={
            'https://cdn.popsww.com/blog/sites/2/2023/02/cac-nhan-vat-trong-boruto-2.jpg'
          }
          alt={'Avatar'}
          className="w-16 h-16 rounded-full object-cover border-2 border-[#D9D9D9] bg-gray-200"
        />
        <div>
          <p>Michael Smith</p>
          <p>michaelsmith12@gmail.com</p>
        </div>
      </div>
      <NotificationIcon size={40} />
    </div>
  );
};

export default Header;
