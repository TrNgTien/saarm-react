import LogoDarkUrl from '@/assets/icons/logo-dark.svg';
import OnBoard from '@/assets/images/on-board.svg';
import { RoutePath } from '@/common/constants';
import { Button } from '@/components';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { Styles } from '@/theme';
import clsx from 'clsx';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const [userType, setUserType] = useState<string>('finder');

  const handleImageLoaded = useCallback(() => {
    setImageLoading(false);
  }, []);

  return (
    <div className="p-4">
      <div className={clsx(Styles.FLEX_ALIGN_CENTER, 'mb-8')}>
        <img src={LogoDarkUrl} width={32} height={32} loading="lazy" />
        <h1 className="font-bold text-xl ml-2">Placepad</h1>
      </div>
      <div className="p-4 text-center">
        {imageLoading && (
          <div className={cn(Styles.FLEX_COL, 'space-y-2 w-full mt-8')}>
            <Skeleton className="h-[300px] rounded-xl w-full bg-gray-300" />
          </div>
        )}
        <img
          src={OnBoard}
          className="mx-auto"
          loading="lazy"
          alt="image"
          onLoad={handleImageLoaded}
        />
        <h1 className="font-semibold text-xl mt-8">
          Giải pháp quản lý nhà cửa thông minh
        </h1>
        <h1 className="text-xs mt-2">
          Cập nhật thông tin cá nhân và chi phí thuê nhà nhanh chóng
        </h1>
      </div>

      <div className="w-10/12 mx-auto">
        <select
          className="border p-2 rounded-xl w-full my-4"
          onChange={(e) => setUserType(e.target.value)}>
          <option value="finder">Tìm trọ</option>
          <option value="landlord">Chủ nhà</option>
          <option value="tenant">Người ở</option>
        </select>

        <Button
          title={'Tiếp Tục'}
          titleStyles="text-black-100 font-semibold text-sm"
          onClick={() =>
            navigate(RoutePath.LOGIN, { state: {  userType } })
          }
          btnStyles={'bg-green-300 text-black-100 font-semibold text-sm'}
        />

        <Button
          title={'Tạo tài khoản mới'}
          titleStyles="text-green-80 font-semibold text-sm"
          onClick={() => navigate(RoutePath.REGISTER)}
          btnStyles={
            'mt-4 border bg-white-900 text-green-80 font-semibold text-sm'
          }
        />
      </div>
    </div>
  );
};

export default WelcomePage;
