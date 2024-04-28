import { RoutePath } from '@/common/constants';
import { IconWrapper } from '@/components/common';
import { Color } from '@/theme';
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
import { useLocation, useNavigate } from 'react-router-dom';
import { NavigationItem } from './components/NavigationItems';

interface INavItems {
  id: string;
  name: string;
  icon: IconBaseProps;
  path: string;
  headerTitle?: string;
  disable?: boolean;
}

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
        headerTitle: 'Chụp ảnh',
        path: RoutePath.WATER_METER,
        icon: (
          <div className="rounded-full bg-black-900 p-6 absolute xs:p-4 top-[-2rem] border-4 border-white-900">
            <IconWrapper size={24} color={Color.MAIN_WHITE}>
              <Camera />
            </IconWrapper>
          </div>
        ),
      },
      {
        id: 'message',
        name: 'Tin nhắn',
        disable: true,
        path: RoutePath.MESSAGE,
        icon: (
          <IconWrapper
            size={24}
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
        disable: true,
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

  return (
    <div className="fixed flex xs:p-4 sm:p-6 items-center bottom-0 bg-[#F1F1F1] w-full rounded-t-3xl justify-between lg:hidden">
      {navItems.map((i) => {
        const { icon, path, name, id, headerTitle, disable } = i;

        if (id === 'camera') {
          return (
            <NavigationItem
              key={id}
              styleOverride="text-black-900 font-semibold"
              icon={icon}
              onClick={() => {
                !disable &&
                  navigate(path, {
                    state: {
                      headerTitle: 'Chụp ảnh',
                    },
                  });
              }}>
              <p className="xs:text-xs mt-6">{name}</p>
            </NavigationItem>
          );
        }

        return (
          <NavigationItem
            key={id}
            styleOverride="text-black-500"
            icon={icon}
            onClick={() => {
              !disable &&
                navigate(path, {
                  state: {
                    headerTitle,
                  },
                });
            }}>
            <p
              className={clsx(
                'xs:text-xs',
                pathname === path ? 'text-green-100' : 'text-black-500',
              )}>
              {name}
            </p>
          </NavigationItem>
        );
      })}
    </div>
  );
};

export default BottomNav;
