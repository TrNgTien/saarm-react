import { cn } from '@/lib/utils';
import { Styles } from '@/theme';
import React, { lazy } from 'react';
const SideBar = lazy(() => import('./SideBar'));

interface IMobileLayoutProps {
  children: React.ReactNode;
  hasNav?: boolean;
}
const PcLayout = (props: IMobileLayoutProps) => {
  const { children } = props;
  return (
    <div className={cn(Styles.FLEX_BETWEEN, 'h-dvh my-6')}>
      <div className="w-[20%] h-dvh">
        <SideBar />
      </div>
      <div className="w-[80%] h-dvh border p-6 m-6 rounded-3xl shadow-md">
        {children}
      </div>
    </div>
  );
};

export default PcLayout;
