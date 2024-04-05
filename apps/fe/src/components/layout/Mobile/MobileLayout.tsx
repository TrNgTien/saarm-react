import React from 'react';
import BottomNav from './BottomNav';
import Header from './Header';

interface IMobileLayoutProps {
  children: React.ReactNode;
}
const MobileLayout = (props: IMobileLayoutProps) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <BottomNav />
    </div>
  );
};

export default MobileLayout;
