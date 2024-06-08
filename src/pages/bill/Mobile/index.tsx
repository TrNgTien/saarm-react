import { lazy } from 'react';

const BillMobile = lazy(() => import('./BillMobile'));
const MobileLayout = lazy(
  () => import('@/components/layout/Mobile/MobileLayout'),
);

const BillPageLazy = () => {
  return (
    <MobileLayout>
      <BillMobile />
    </MobileLayout>
  );
};

export default BillPageLazy;
