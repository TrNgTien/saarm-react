import { Loading } from '@/components';
import { lazy, Suspense } from 'react';

const MessagePage = lazy(() => import('./MessagePage'));

const Message = () => {
  return (
    <Suspense fallback={<Loading />}>
      <MessagePage />
    </Suspense>
  );
};

export default Message;
