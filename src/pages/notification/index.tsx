import { Loading } from '@/components';
import { lazy, Suspense } from 'react';
const NotificationPage = lazy(() => import('./Notification'));

const Notification = () => {
  return (
    <Suspense fallback={<Loading />}>
      <NotificationPage />
    </Suspense>
  );
};

export default Notification;
