import { lazy } from 'react';
const SettingPC = lazy(() => import('./SettingPC'));
const PcLayout = lazy(() => import('@/components/layout/PC/PcLayout'));

const Setting = () => {
  return (
    <PcLayout>
      <SettingPC />
    </PcLayout>
  );
};

export default Setting;
