import { Loading } from '@/components';
import { useOnPhone } from '@/hooks';
import { lazy, Suspense } from 'react';

const RegisterMobile = lazy(() => import('./Mobile'));
const RegisterPC = lazy(() => import('./PC'));

const LoginPage = () => {
  const isPhone = useOnPhone();
  return (
    <Suspense fallback={<Loading />}>
      {isPhone ? <RegisterMobile /> : <RegisterPC />}
    </Suspense>
  );
};

export default LoginPage;
