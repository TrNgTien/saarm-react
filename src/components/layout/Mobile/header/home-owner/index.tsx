import Avatar from '@/assets/icons/avatar.svg';
import { EMethods } from '@/common';
import { RestEndpoints, RoutePath, Statuses } from '@/common/constants';
import { IconWrapper } from '@/components/common';
import { getDecodedToken } from '@/helpers';
import { networkInstance } from '@/services';
import { Color, Styles } from '@/theme';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { IoMdNotificationsOutline as NotificationIcon } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

interface IUser {
  id: string;
  email: string;
  name: string;
  status: typeof Statuses;
  lastLoginAt: string;
}

const Header = () => {
  const navigate = useNavigate();
  const token = useMemo(getDecodedToken, [getDecodedToken]);
  const [user, setUser] = useState<IUser>();

  const getHomeowner = useCallback(async () => {
    try {
      const rs = await networkInstance.send({
        method: EMethods.GET,
        path: `${RestEndpoints.USER}/${token?.userId}`,
      });

      if (!rs.success) {
        return;
      }

      setUser(rs.data);
    } catch (e) {
      console.error('[getRoom] | %s', e);
    }
  }, []);

  useEffect(() => {
    getHomeowner();
  }, []);
  console.log ("checking", user)

  return (
    <div
      className={`${Styles.FLEX_BETWEEN} ${Styles.Z_INDEX} px-4 py-8 leading-4 bg-[#0A150F]`}>
      <div className={Styles.FLEX_CENTER}>
        <img
          src={Avatar}
          loading="lazy"
          alt={'Avatar'}
          className="ml-2 size-8 rounded-full object-cover border border-white-20 bg-gray-200"
        />
        <div className="p-2">
          <p className="text-black-500 text-xs mt-2">{user?.name}</p>
          <p className="text-black-500 text-xs mt-2">{user?.email}</p>
        </div>
      </div>
      <div className={Styles.FLEX_BETWEEN}>
        <IconWrapper
          size={30}
          iconAmount={0}
          color={Color.MAIN_WHITE}
          onClick={() => navigate(RoutePath.NOTIFICATION)}>
          <NotificationIcon />
        </IconWrapper>
      </div>
    </div>
  );
};

export default memo(Header);
