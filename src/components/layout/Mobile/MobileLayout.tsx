import React, { lazy } from 'react';
const BottomNav = lazy(() => import('./bottom-nav'));
const Header = lazy(() => import('./header'));

interface IMobileLayoutProps {
  children: React.ReactNode;
  hasNav?: boolean;
}
const MobileLayout = (props: IMobileLayoutProps) => {
  const { children, hasNav = true } = props;
  return (
    <div>
      <Header />
      {children}
      {hasNav && <BottomNav />}
    </div>
  );
};

export default MobileLayout;
