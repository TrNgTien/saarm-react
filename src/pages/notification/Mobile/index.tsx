import { UserType } from '@/common/constants';
import { useAuthorization } from '@/hooks';
import { lazy } from 'react';

const MobileLayout = lazy(
  () => import('@/components/layout/Mobile/MobileLayout'),
);
const NotificationTenant = lazy(() => import('./tenant'));
const NotificationHomeOwner = lazy(() => import('./home-owner'));

const Setting = () => {
  const permission = useAuthorization();
  return (
    <MobileLayout>
      {permission === UserType.HOMEOWNER ? (
        <NotificationHomeOwner />
      ) : (
        <NotificationTenant />
      )}
    </MobileLayout>
  );
};

export default Setting;
