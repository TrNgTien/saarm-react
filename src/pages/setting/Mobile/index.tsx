import MobileLayout from '@/components/layout/Mobile/MobileLayout';
import { lazy } from 'react';
const SettingMobile = lazy(() => import('./SettingMobile'));

const Setting = () => {
  return (
    <MobileLayout>
      <SettingMobile />
    </MobileLayout>
  );
};

export default Setting;
