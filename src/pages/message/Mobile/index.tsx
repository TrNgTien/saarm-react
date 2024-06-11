import { lazy } from 'react';
const MobileLayout = lazy(
  () => import('@/components/layout/Mobile/MobileLayout'),
);
const MessageMobile = lazy(() => import('./MessageMobile'));

const Home = () => {
  return (
    <MobileLayout>
      <MessageMobile />
    </MobileLayout>
  );
};

export default Home;
