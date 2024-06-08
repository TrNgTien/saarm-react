import React, { lazy } from 'react';
const BottomNav = lazy(() => import('./BottomNav'));
const Header = lazy(() => import('./headers/Header'));

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
