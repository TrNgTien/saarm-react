import { Loading } from '@/components';
import { useOnPhone } from '@/hooks';
import { lazy, Suspense } from 'react';

const LoginMobile = lazy(() => import('./Mobile'));
const LoginPC = lazy(() => import('./PC'));

const LoginPage = () => {
  const isPhone = useOnPhone();
  return (
    <Suspense fallback={<Loading />}>
      {isPhone ? <LoginMobile /> : <LoginPC />}
    </Suspense>
  );
};

export default LoginPage;
