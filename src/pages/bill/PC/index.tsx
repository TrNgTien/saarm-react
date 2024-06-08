import { Loading } from '@/components';
import { lazy, Suspense } from 'react';

const PcLayout = lazy(() => import('@/components/layout/PC/PcLayout'));
const BillPC = lazy(() => import('./BillPC'));

const BillPcLazy = () => {
  return (
    <Suspense fallback={<Loading />}>
      <PcLayout>
        <BillPC />
      </PcLayout>
    </Suspense>
  );
};

export default BillPcLazy;
