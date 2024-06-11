import comingSoon from '@/assets/animations/coming-soon.json';
import { LottieAnimation } from '@/components';
import { memo } from 'react';

const MessageMobile = () => {
  return <LottieAnimation animationJson={comingSoon} />;
};

export default memo(MessageMobile);
