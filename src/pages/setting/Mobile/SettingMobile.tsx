import comingSoon from '@/assets/animations/coming-soon.json';
import { LottieAnimation } from '@/components';
import { memo } from 'react';

const SettingMobile = () => {
  return <LottieAnimation animationJson={comingSoon} />;
};

export default memo(SettingMobile);
