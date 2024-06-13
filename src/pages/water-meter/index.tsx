import { Loading } from '@/components';
import { useOnPhone } from '@/hooks';
import { lazy, Suspense } from 'react';
const WaterMeterMobile = lazy(() => import('./Mobile'));
const WaterMeterPC = lazy(() => import('./PC'));

const WaterMeter = () => {
  const isMobile = useOnPhone();

  return (
    <Suspense fallback={<Loading />}>
      {!isMobile ? <WaterMeterPC /> : <WaterMeterMobile />}
    </Suspense>
  );
};

export default WaterMeter;
