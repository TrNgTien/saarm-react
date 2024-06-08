import { lazy } from 'react';

const HomeMobile = lazy(() => import('./HomeMobile'));
const MobileLayout = lazy(
  () => import('@/components/layout/Mobile/MobileLayout'),
);
const HomeMobileLazy = () => {
  return (
    <MobileLayout>
      <HomeMobile />
    </MobileLayout>
  );
};

export default HomeMobileLazy;
