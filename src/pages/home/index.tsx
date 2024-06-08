import { Loading } from '@/components';
import { useOnPhone } from '@/hooks';
import { lazy, Suspense } from 'react';

const HomeMobilePage = lazy(() => import('./Mobile'));
const HomePcPage = lazy(() => import('./PC'));

const HomePage = () => {
  const isMobile = useOnPhone();

  return (
    <Suspense fallback={<Loading />}>
      {isMobile ? <HomeMobilePage /> : <HomePcPage />}
    </Suspense>
  );
};

export default HomePage;
