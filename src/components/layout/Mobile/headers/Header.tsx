import { EMethods } from '@/common';
import { RestEndpoints, UserType } from '@/common/constants';
import { IRoom } from '@/common/types/room';
import { IconWrapper } from '@/components/common';
import { getDecodedToken } from '@/helpers';
import { useAppDispatch } from '@/hooks';
import { setRoomData } from '@/redux/slices/room.slice';
import { networkInstance } from '@/services';
import { Color, Styles } from '@/theme';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { MdOutlineHomeWork as RoomIcon } from 'react-icons/md';

const Header = () => {
  const dispatch = useAppDispatch();
  const token = useMemo(getDecodedToken, [getDecodedToken]);
  const [room, setRoom] = useState<IRoom>();

  const getRoom = useCallback(async () => {
    try {
      const rs = await networkInstance.send({
        method: EMethods.GET,
        path: `${RestEndpoints.ROOM}/${token?.roomId}`,
      });

      if (!rs.success) {
        return;
      }

      setRoom(rs.data);
      dispatch(setRoomData(rs.data));
    } catch (e) {
      console.error('[getRoom] | %s', e);
    }
  }, []);

  useEffect(() => {
    if (token?.role !== UserType.TENANT) {
      return;
    }

    getRoom();
  }, [token]);

  return (
    <div
      className={`${Styles.FLEX_BETWEEN} ${Styles.Z_INDEX} p-4 leading-4 bg-[#0A150F]`}>
      <div className={Styles.FLEX_CENTER}>
        <IconWrapper size={24} color={Color.MAIN_WHITE}>
          <RoomIcon />
        </IconWrapper>
        <div className="p-2">
          <p className="text-white-10 text-md">
            {room?.roomName && `Phòng ${room?.roomName}`}
          </p>
          <p className="text-black-500 text-xs mt-2">
            {room?.apartmentAddress}
          </p>
        </div>
      </div>
      {/* <div className={Styles.FLEX_BETWEEN}>
        <IconWrapper
          size={30}
          iconAmount={11111112}
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
          className="ml-2 size-8 rounded-full object-cover border border-white-20 bg-gray-200"
        />
      </div> */}
    </div>
  );
};

export default memo(Header);
