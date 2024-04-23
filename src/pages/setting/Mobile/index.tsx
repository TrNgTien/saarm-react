import { Loading } from '@/components';
import { lazy, Suspense } from 'react';
const SettingMobile = lazy(() => import('./SettingMobile'));

const Setting = () => {
  return (
    <Suspense fallback={<Loading />}>
      <SettingMobile />
    </Suspense>
  );
};

export default Setting;
