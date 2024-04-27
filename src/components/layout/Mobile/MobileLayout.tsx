import React from 'react';
import BottomNav from './BottomNav';
import Header from './headers/HomeHeader';

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
