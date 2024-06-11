import { Loading } from '@/components';
import { useOnPhone } from '@/hooks';
import { Suspense, lazy } from 'react';

const SettingMobile = lazy(() => import('./Mobile'));
const SettingPC = lazy(() => import('./PC'));

const SettingPage = () => {
  const isMobile = useOnPhone();

  return (
    <Suspense fallback={<Loading />}>
      {isMobile ? <SettingMobile /> : <SettingPC />}
    </Suspense>
  );
};

export default SettingPage;
