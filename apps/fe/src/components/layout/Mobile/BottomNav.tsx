import { RoutePath } from '@/common/constants';
import { IconWrapper } from '@/components/common';
import { Color, Style } from '@/theme';
import clsx from 'clsx';
import { useMemo } from 'react';
import { IconBaseProps } from 'react-icons';
import {
  IoCameraOutline as Camera,
  IoHomeOutline as HomeIcon,
  IoSettingsOutline as SettingIcon,
} from 'react-icons/io5';
import { LuClipboardList as BillIcon } from 'react-icons/lu';
import { TbMessageCircle2 as MessageIcon } from 'react-icons/tb';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface INavItems {
  id: string;
  name: string;
  icon: IconBaseProps;
  path: string;
}

const WRAPPER_BOTTOM_NAV = `border-2
                 fixed
                 flex
                 p-8
                 items-center
                 bottom-0
                 bg-white-10
                 w-full
                 rounded-t-3xl
                 justify-between
                 lg:hidden
                 `;

const BottomNav = () => {
  const { pathname = '' } = useLocation();
  const navigate = useNavigate();

  const navItems: Array<INavItems> = useMemo(() => {
    return [
      {
        id: 'home',
        name: 'Trang chủ',
        path: RoutePath.HOME,
        icon: (
          <IconWrapper
            size={24}
            color={
              pathname === RoutePath.HOME ? Color.PRIMARY : Color.BLACK_500
            }
            strokeWidth={0.5}>
            <HomeIcon />
          </IconWrapper>
        ),
      },
      {
        id: 'bill',
        name: 'Hoá Đơn',
        path: RoutePath.BILLING,
        icon: (
          <IconWrapper
            size={24}
            color={
              pathname === RoutePath.BILLING ? Color.PRIMARY : Color.BLACK_500
            }
            strokeWidth={1.5}>
            <BillIcon />
          </IconWrapper>
        ),
      },
      {
        id: 'camera',
        name: 'Chụp số nước',
        path: RoutePath.WATER_METER,
        icon: (
          <div className="rounded-full bg-black-900 p-6 absolute top-[-2rem] border-4 border-t- border-white-20">
            <IconWrapper size={24} color={Color.MAIN_WHITE}>
              <Camera />
            </IconWrapper>
          </div>
        ),
      },
      {
        id: 'message',
        name: 'Tin nhắn',
        path: RoutePath.MESSAGE,
        icon: (
          <IconWrapper
            size={24}
            hasAmount
            color={
              pathname === RoutePath.MESSAGE ? Color.PRIMARY : Color.BLACK_500
            }>
            <MessageIcon />
          </IconWrapper>
        ),
      },
      {
        id: 'settings',
        name: 'Cài Đặt',
        path: RoutePath.SETTING,
        icon: (
          <IconWrapper
            size={24}
            color={
              pathname === RoutePath.SETTING ? Color.PRIMARY : Color.BLACK_500
            }
            strokeWidth={1}>
            <SettingIcon />
          </IconWrapper>
        ),
      },
    ];
  }, [pathname]);

  const NavigationItem = (item: {
    styleOverride?: string;
    name?: string;
    icon?: IconBaseProps;
    path?: string;
    onClick: () => void;
  }) => {
    const { icon, path, name, styleOverride, onClick } = item;

    return (
      <div
        onClick={onClick}
        className={clsx(
          `${Style.FLEX_CENTER} flex-col text-black-500 md:text-sm text-xs`,
          'text-center',
          !styleOverride ? null : styleOverride,
          pathname === path && 'text-green-100',
        )}>
        <>{icon}</>
        <p className="mt-6">{name}</p>
      </div>
    );
  };

  return (
    <div className={WRAPPER_BOTTOM_NAV}>
      {navItems.map((i) => {
        const { icon, path, name, id } = i;

        if (id === 'camera') {
          return (
            <NavigationItem
              key={id}
              styleOverride="text-black-900 font-semibold"
              name={name}
              icon={icon}
              onClick={() =>
                navigate(path, {
                  state: {
                    headerTitle: 'Chụp ảnh',
                  },
                })
              }
            />
          );
        }

        return (
          <Link key={id} to={path}>
            <div
              className={clsx(
                'flex flex-col items-center justify-center',
                'text-black-500',
                'md:text-sm text-xs',
                'text-center',
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
