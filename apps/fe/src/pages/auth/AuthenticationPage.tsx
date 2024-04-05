import { Loading } from '@/components';
import { lazy, Suspense } from 'react';

const AuthenticationPage = lazy(() => import('./AuthenticationPage'));

const AuthPage = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <AuthenticationPage />
    </Suspense>
  );
};

export default AuthPage;
