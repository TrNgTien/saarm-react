import { UserType } from '@/common/constants';
import { useAuthorization } from '@/hooks';
import { lazy } from 'react';

const MobileLayout = lazy(
  () => import('@/components/layout/Mobile/MobileLayout'),
);
const SettingTenant = lazy(() => import('./tenant'));
const SettingHomeOwner = lazy(() => import('./home-owner'));

const Setting = () => {
  const permission = useAuthorization();
  return (
    <MobileLayout>
      {permission === UserType.HOMEOWNER ? (
        <SettingHomeOwner />
      ) : (
        <SettingTenant />
      )}
    </MobileLayout>
  );
};

export default Setting;
