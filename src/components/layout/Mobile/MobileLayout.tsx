import React, { lazy } from 'react';
import { useWindowScroll } from 'react-use';
const BottomNav = lazy(() => import('./bottom-nav'));
const Header = lazy(() => import('./header'));

interface IMobileLayoutProps {
  children: React.ReactNode;
  hasNav?: boolean;
}
const MobileLayout = (props: IMobileLayoutProps) => {
  const { children, hasNav = true } = props;
  const scrollDimension = useWindowScroll();

  return (
    <div>
      <Header />
      {children}
      {hasNav && scrollDimension.y <= 60 && <BottomNav />}
    </div>
  );
};

export default MobileLayout;
