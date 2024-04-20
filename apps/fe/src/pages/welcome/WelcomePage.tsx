import LogoDark from '@/assets/icons/logo-dark.svg';
import OnBoard from '@/assets/images/on-board.svg';
import { RoutePath } from '@/common/constants';
import { Button } from '@/components';
import { Style } from '@/theme';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <div className={clsx(Style.FLEX_ALIGN_CENTER, 'mb-8')}>
        <img src={LogoDark} width={32} height={32} loading="lazy" />
        <h1 className="font-bold text-xl ml-2">Placepad</h1>
      </div>
      <div className="p-4 text-center">
        <img src={OnBoard} className="mx-auto" />
        <h1 className="font-semibold text-xl mt-8">
          Giải pháp quản lý nhà cửa thông minh
        </h1>
        <h1 className="text-xs mt-2">
          Cập nhật thông tin cá nhân và chi phí thuê nhà nhanh chóng
        </h1>
      </div>

      <div className="w-10/12 mx-auto">
        <Button
          title={'Đăng nhập'}
          onClick={() => navigate(RoutePath.LOGIN)}
          btnStyle={'bg-green-300 text-black-100 font-semibold text-sm'}
        />

        <Button
          title={'Tạo tài khoản mới'}
          onClick={() => navigate(RoutePath.REGISTER)}
          btnStyle={
            'mt-4 border bg-white-900 text-green-80 font-semibold text-sm'
          }
        />
      </div>
    </div>
  );
};

export default WelcomePage;
