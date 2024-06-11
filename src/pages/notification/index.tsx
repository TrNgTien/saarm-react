import { Loading } from '@/components';
import { useOnPhone } from '@/hooks';
import { lazy, Suspense } from 'react';

const NotificationMobile = lazy(() => import('./Mobile'));
const NotificationPC = lazy(() => import('./PC'));

const Notification = () => {
  const isMobile = useOnPhone();
  return (
    <Suspense fallback={<Loading />}>
      {isMobile ? <NotificationMobile /> : <NotificationPC />}
    </Suspense>
  );
};

export default Notification;
