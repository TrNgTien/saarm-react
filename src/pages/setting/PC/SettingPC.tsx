import { memo } from 'react';
import comingSoon from '@/assets/animations/coming-soon.json';
import { LottieAnimation } from '@/components';

const SettingPC = () => {
  return (
    <div className="text-white-10 h-full bg-white-50">
      <LottieAnimation animationJson={comingSoon} />
    </div>
  );
};

export default memo(SettingPC);
