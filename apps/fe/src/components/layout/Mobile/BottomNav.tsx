import { RoutePath } from '@/common/constants';
import { Color } from '@/theme';
import clsx from 'clsx';
import { useMemo } from 'react';
import { IconBaseProps } from 'react-icons';
import {
  IoHomeOutline as HomeIcon,
  IoSettingsOutline as SettingIcons,
} from 'react-icons/io5';
import { LuClipboardList as BillIcon } from 'react-icons/lu';
import { Link, useLocation } from 'react-router-dom';

interface INavItems {
  id: string;
  name: string;
  icon: IconBaseProps;
  path: string;
}

const WRAPPER_BOTTOM_NAV = `border-2
                 fixed
                 flex
                 p-6
                 bottom-0
                 bg-white-10
                 w-full
                 rounded-t-3xl
                 justify-between`;

const BottomNav = () => {
  const { pathname = '' } = useLocation();

  const navItems: Array<INavItems> = useMemo(() => {
    return [
      {
        id: 'home',
        name: 'Trang chủ',
        path: RoutePath.HOME,
        icon: (
          <HomeIcon
            size={24}
            color={
              pathname === RoutePath.HOME ? Color.PRIMARY : Color.BLACK_500
            }
            strokeWidth={0.5}
          />
        ),
      },
      {
        id: 'bill',
        name: 'Hoá Đơn',
        path: RoutePath.BILLING,
        icon: (
          <BillIcon
            size={24}
            color={
              pathname === RoutePath.BILLING ? Color.PRIMARY : Color.BLACK_500
            }
            strokeWidth={1.5}
          />
        ),
      },
      {
        id: 'message',
        name: 'Tin nhan',
        path: RoutePath.SETTING,
        icon: (
          <SettingIcons
            size={24}
            color={
              pathname === RoutePath.SETTING ? Color.PRIMARY : Color.BLACK_500
            }
            strokeWidth={1}
          />
        ),
      },
      {
        id: 'settings',
        name: 'Cài Đặt',
        path: RoutePath.SETTING,
        icon: (
          <SettingIcons
            size={24}
            color={
              pathname === RoutePath.SETTING ? Color.PRIMARY : Color.BLACK_500
            }
            strokeWidth={1}
          />
        ),
      },
    ];
  }, [pathname]);

  return (
    <div className={WRAPPER_BOTTOM_NAV}>
      {navItems.map((i) => {
        const { icon, path, name, id } = i;
        return (
          <Link to={path}>
            <div
              key={id}
              className={clsx(
                'flex flex-col items-center justify-center',
                'text-black-500',
                pathname === path && 'text-green-100',
              )}>
              <>{icon}</>
              <p> {name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNav;
