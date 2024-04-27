import { Loading } from '@/components';
import { Suspense, lazy } from 'react';

const WelcomeLazyPage = lazy(() => import('./WelcomePage'));

const WelcomePage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <WelcomeLazyPage />
    </Suspense>
  );
};

export default WelcomePage;
