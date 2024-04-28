import Lottie from 'lottie-react';

export const LottieAnimation = (props: {animationJson: unknown}) => {
  const {animationJson} = props
  return <Lottie animationData={animationJson} loop={true} />;
};
