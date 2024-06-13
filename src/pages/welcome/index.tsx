import { Loading } from '@/components';
import PromptPWA from '@/components/modal/PromptPWA';
import { useOnPhone } from '@/hooks';
import { Suspense, lazy } from 'react';

const WelcomeMobile = lazy(() => import('./Mobile'));
const WelcomePC = lazy(() => import('./PC'));

const WelcomePage = () => {
  const isPhone = useOnPhone();

  return (
    <Suspense fallback={<Loading />}>
      <PromptPWA />
      {isPhone ? <WelcomeMobile /> : <WelcomePC />}
    </Suspense>
  );
};

export default WelcomePage;
