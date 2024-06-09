import { lazy } from 'react';
const MobileLayout = lazy(
  () => import('@/components/layout/Mobile/MobileLayout'),
);
const SettingMobile = lazy(() => import('./SettingMobile'));

const Setting = () => {
  return (
    <MobileLayout>
      <SettingMobile />
    </MobileLayout>
  );
};

export default Setting;
