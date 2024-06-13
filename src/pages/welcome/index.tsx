import { Loading } from '@/components';
import { useOnPhone } from '@/hooks';
import { Suspense, lazy } from 'react';

const WelcomeMobile = lazy(() => import('./Mobile'));
const WelcomePC = lazy(() => import('./PC'));

const WelcomePage = () => {
  const isPhone = useOnPhone();

  return (
    <Suspense fallback={<Loading />}>
      {isPhone ? <WelcomeMobile /> : <WelcomePC />}
    </Suspense>
  );
};

export default WelcomePage;
