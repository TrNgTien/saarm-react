import { Loading } from '@/components';
import { lazy, Suspense } from 'react';

const BillPage = lazy(() => import('./BillPage'));

const Billing = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BillPage />
    </Suspense>
  );
};

export default Billing;
