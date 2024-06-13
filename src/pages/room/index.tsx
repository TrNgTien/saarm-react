import { Loading } from '@/components';
import { useOnPhone } from '@/hooks';
import { Suspense, lazy } from 'react';

const ApartmentPC = lazy(() => import('./PC'));
const ApartmentMobile = lazy(() => import('./Mobile'));

const ApartmentPage = () => {
  const isPhone = useOnPhone();
  return (
    <Suspense fallback={<Loading />}>
      {isPhone ? <ApartmentMobile /> : <ApartmentPC />}
    </Suspense>
  );
};

export default ApartmentPage;
