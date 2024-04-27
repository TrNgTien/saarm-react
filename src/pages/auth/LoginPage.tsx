import { Loading } from '@/components';
import { lazy, Suspense } from 'react';

const LoginLazyPage = lazy(() => import('./LoginLazyPage'));

const LoginPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <LoginLazyPage />
    </Suspense>
  );
};

export default LoginPage;
