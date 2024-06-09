import MobileLayout from '@/components/layout/Mobile/MobileLayout';
import { lazy } from 'react';
const MessageMobile = lazy(() => import('./MessageMobile'));

const Home = () => {
  return (
    <MobileLayout>
      <MessageMobile />
    </MobileLayout>
  );
};

export default Home;
