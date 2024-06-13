import comingSoon from '@/assets/animations/coming-soon.json';
import { LottieAnimation } from '@/components';
import { memo } from 'react';

const NotificationMobile = () => {
  return (
    <div className="h-full p-4">
      <h1 className="my-4">Thông báo</h1>
      <div className="h-full border rounded-lg">
        <LottieAnimation animationJson={comingSoon} />
      </div>
    </div>
  );
};

export default memo(NotificationMobile);
