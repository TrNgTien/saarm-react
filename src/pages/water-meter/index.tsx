import { Loading } from '@/components';
import { lazy, Suspense } from 'react';
const WaterMeterCapture = lazy(() => import('./WaterMeter'));

const WaterMeter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <WaterMeterCapture />
    </Suspense>
  );
};

export default WaterMeter;
