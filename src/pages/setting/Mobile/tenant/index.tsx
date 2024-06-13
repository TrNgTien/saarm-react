import { IRoom } from '@/common';
import { RoutePath } from '@/common/constants';
import { Button } from '@/components';
import { cn } from '@/lib/utils';
import { resetDetection } from '@/redux/slices/detection.slice';
import { resetRoomState } from '@/redux/slices/room.slice';
import { resetUserData } from '@/redux/slices/user.slice';
import { RootState } from '@/redux/store';
import { Styles } from '@/theme';
import { dayjs, getPartOfDay } from '@/utils';
import { memo, useCallback, useEffect, useState } from 'react';
import { FcClock as Clock } from 'react-icons/fc';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SettingMobile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [partOfDay, setPartOfDay] = useState<string>('');
  const [time, setTime] = useState(dayjs().format('HH:mm:ss'));

  const { apartmentName } = useSelector((st: RootState) => {
    const { roomName, apartmentName } = st.room.room as IRoom;
    return { roomName, apartmentName };
  }, shallowEqual);

  const handleLogout = useCallback(() => {
    dispatch(resetUserData());
    dispatch(resetRoomState());
    dispatch(resetDetection());

    localStorage.removeItem('token');
    navigate(RoutePath.LOGIN, {replace: true});
  }, [navigate, dispatch]);

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();
    setPartOfDay(getPartOfDay(hours));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().format('HH:mm:ss'));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="p-6">
      <div className={cn(Styles.FLEX_CENTER, 'float-right')}>
        <Clock size={20} />
        <h1 className="ml-2 text-xl">{time}</h1>
      </div>
      <h1 className="font-semibold">Chào, {partOfDay}</h1>

      <h1 className="mt-8">{apartmentName}</h1>
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
