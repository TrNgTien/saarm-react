import comingSoon from '@/assets/animations/coming-soon.json';
import { LottieAnimation } from '@/components';
import { memo } from 'react';

const BillPC = () => {
  return (
    <div className="text-white-10 h-full bg-white-50">
      <div className="h-full border rounded-lg">
        <LottieAnimation animationJson={comingSoon} />
      </div>
    </div>
  );
};

export default memo(BillPC);
