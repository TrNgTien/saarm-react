import { PageHeader } from '@/components';
import { Location, useLocation } from 'react-router-dom';

const WaterMeter = () => {
  const { state }: Location<{ headerTitle: string }> = useLocation();

  return (
    <div>
      <PageHeader title={state.headerTitle} />
    </div>
  );
};

export default WaterMeter;
