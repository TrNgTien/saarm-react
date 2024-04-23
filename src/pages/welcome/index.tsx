import { CommonLoading } from '@/components';
import { Suspense, lazy } from 'react';

const WelcomeLazyPage = lazy(() => import('./WelcomePage'));

const WelcomePage = () => {
  return (
    <Suspense fallback={<CommonLoading />}>
      <WelcomeLazyPage />
    </Suspense>
  );
};

export default WelcomePage;
