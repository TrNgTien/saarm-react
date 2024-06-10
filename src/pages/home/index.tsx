import { Loading } from '@/components';
import { useAuthorization, useOnPhone } from '@/hooks';
import { Suspense, lazy } from 'react';

const HomeMobilePage = lazy(() => import('./Mobile'));
const HomePcPage = lazy(() => import('./PC'));

const HomePage = () => {
  const isMobile = useOnPhone();
  const permission = useAuthorization();

  console.log("HomePage", permission)

  return (
    <Suspense fallback={<Loading />}>
      {isMobile ? <HomeMobilePage /> : <HomePcPage />}
    </Suspense>
  );
};

export default HomePage;
