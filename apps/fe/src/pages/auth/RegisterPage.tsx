import { Loading } from '@/components';
import { lazy, Suspense } from 'react';

const RegisterLazyPage = lazy(() => import('./RegisterLazyPage'));

const RegisterPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RegisterLazyPage />
    </Suspense>
  );
};

export default RegisterPage;
