import { Style } from '@/theme';
import clsx from 'clsx';
import { IconBaseProps } from 'react-icons';
import { useLocation } from 'react-router-dom';

export const NavigationItem = (item: {
  styleOverride?: string;
  icon?: IconBaseProps;
  path?: string;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  const { pathname = '' } = useLocation();
  const { icon, path, styleOverride, onClick, children } = item;

  return (
    <div
      onClick={onClick}
      className={clsx(
        `${Style.FLEX_CENTER} flex-col text-black-500 md:text-sm text-xs text-center`,
        styleOverride && styleOverride,
        pathname === path && 'text-green-100',
      )}>
      <>{icon}</>
      {children}
    </div>
  );
};
