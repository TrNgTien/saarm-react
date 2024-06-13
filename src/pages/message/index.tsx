import { Loading } from '@/components';
import { useOnPhone } from '@/hooks';
import { lazy, Suspense } from 'react';

const MessageMobile = lazy(() => import('./Mobile'));
const MessagePC = lazy(() => import('./PC'));

const Message = () => {
  const isMobile = useOnPhone();
  return (
    <Suspense fallback={<Loading />}>
      {isMobile ? <MessageMobile /> : <MessagePC />}
    </Suspense>
  );
};

export default Message;
