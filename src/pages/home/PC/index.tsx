import PcLayout from '@/components/layout/PC/PcLayout';
import { lazy } from 'react';
const HomePC = lazy(() => import('./HomePC'));

const Home = () => {
  return (
    <PcLayout>
      <HomePC />
    </PcLayout>
  );
};

export default Home;
