import React from 'react';
import BottomNav from './BottomNav';
import Header from './Header';

interface IMobileLayoutProps {
  children: React.ReactNode;
}
const MobileLayout = (props: IMobileLayoutProps) => {
  const { children } = props;
  return (
    <React.Fragment>
      <Header />
      {children}
      <BottomNav />
    </React.Fragment>
  );
};

export default MobileLayout;
