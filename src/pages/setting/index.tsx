import { Loading } from '@/components';
import { useOnPhone } from '@/hooks';
import { Suspense } from 'react';
import SettingMobile from './Mobile';
import SettingPC from './PC';

const SettingPage = () => {
  const isMobile = useOnPhone();

  return (
    <Suspense fallback={<Loading />}>
      {isMobile ? <SettingMobile /> : <SettingPC />}
    </Suspense>
  );
};

export default SettingPage;
