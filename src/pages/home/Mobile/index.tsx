import { Loading } from '@/components';
import { lazy, Suspense } from 'react';
const HomeMobile = lazy(() => import('./HomeMobile'));

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <HomeMobile />
    </Suspense>
  );
};

export default Home;
