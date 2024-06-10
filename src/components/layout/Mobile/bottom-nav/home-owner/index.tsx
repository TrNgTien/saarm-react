import { RoutePath } from '@/common/constants';
import { IconWrapper } from '@/components/common';
import { cn } from '@/lib/utils';
import { Color, Styles } from '@/theme';
import clsx from 'clsx';
import { useMemo } from 'react';
import { IconBaseProps } from 'react-icons';
import {
  IoHomeOutline as HomeIcon,
  IoSettingsOutline as SettingIcon,
} from 'react-icons/io5';
import { LuClipboardList as BillIcon } from 'react-icons/lu';
import { TbMessageCircle2 as MessageIcon } from 'react-icons/tb';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavigationItem } from '../../components/NavigationItems';

interface INavItems {
  id: string;
  name: string;
  icon: IconBaseProps;
  path: string;
  headerTitle?: string;
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
        name: 'Tiền phòng trọ',
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
        id: 'message',
        name: 'Tin nhắn',
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
    <div
      className={cn(
        Styles.FLEX_BETWEEN,
        'fixed xs:p-4 sm:p-6 bottom-0 bg-white-10 border w-full rounded-t-3xl lg:hidden',
        'xs:text-xs',
      )}>
      {navItems.map((i) => {
        const { icon, path, name, id, headerTitle } = i;

        return (
          <NavigationItem
            key={id}
            styleOverride="text-black-500"
            icon={icon}
            onClick={() =>
              navigate(path, {
                state: {
                  headerTitle,
                },
              })
            }>
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
