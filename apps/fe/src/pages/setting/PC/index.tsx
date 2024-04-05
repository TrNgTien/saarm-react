import { Loading } from '@/components';
import { lazy, Suspense } from 'react';
const SettingPC = lazy(() => import('./SettingPC'));

const Setting = () => {
  return (
    <Suspense fallback={<Loading />}>
      <SettingPC />
    </Suspense>
  );
};

export default Setting;
