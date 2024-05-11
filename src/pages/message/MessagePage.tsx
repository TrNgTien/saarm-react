import comingSoon from '@/assets/animations/coming-soon.json';
import { LottieAnimation } from '@/components';
import { memo } from 'react';

const MessagePage = () => {
  return <LottieAnimation animationJson={comingSoon} />;
};

export default memo(MessagePage);
