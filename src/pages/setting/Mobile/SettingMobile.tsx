import { RoutePath } from '@/common/constants';
import { Button } from '@/components';
import { resetUserData } from '@/redux/slices/user.slice';
import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SettingMobile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    dispatch(resetUserData());

    navigate(RoutePath.LOGIN);
  }, [navigate, dispatch]);

  return (
    <div className="p-6">
      <h1>Xin chào Tiến</h1>
      <Button
        title="Đăng xuất"
        onClick={handleLogout}
        btnStyles="bg-green-200 border mt-10"
        titleStyles="font-semibold"
      />
    </div>
  );
};

export default memo(SettingMobile);
