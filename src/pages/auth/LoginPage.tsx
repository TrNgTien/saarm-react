import { CommonLoading } from '@/components';
import { lazy, Suspense } from 'react';

const LoginLazyPage = lazy(() => import('./LoginLazyPage'));

const LoginPage = () => {
  return (
    <Suspense fallback={<CommonLoading />}>
      <LoginLazyPage />
    </Suspense>
  );
};

export default LoginPage;
