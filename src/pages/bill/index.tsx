import { Loading } from '@/components';
import { useOnPhone } from '@/hooks';
import { lazy, Suspense } from 'react';

const BillMobilePage = lazy(() => import('./Mobile'));
const BillPcPage = lazy(() => import('./PC'));

const Billing = () => {
  const isMobile = useOnPhone();

  return (
    <Suspense fallback={<Loading />}>
      {isMobile ? <BillMobilePage /> : <BillPcPage />}
    </Suspense>
  );
};

export default Billing;
