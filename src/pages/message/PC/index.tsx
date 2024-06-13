import PcLayout from '@/components/layout/PC/PcLayout';
import { lazy } from 'react';
const MessagePC = lazy(() => import('./MessagePC'));

const Home = () => {
  return (
    <PcLayout>
      <MessagePC />
    </PcLayout>
  );
};

export default Home;
