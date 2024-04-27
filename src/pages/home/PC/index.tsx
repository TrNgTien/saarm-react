import { Loading } from '@/components';
import { lazy, Suspense } from 'react';
const HomePC = lazy(() => import('./HomePC'));

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <HomePC />
    </Suspense>
  );
};

export default Home;
