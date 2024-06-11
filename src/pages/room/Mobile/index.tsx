import { UserType } from '@/common/constants';
import MobileLayout from '@/components/layout/Mobile/MobileLayout';
import { useAuthorization } from '@/hooks';
import { lazy } from 'react';

const RoomHomeowner = lazy(() => import('./home-owner'));
const RoomTenant = lazy(() => import('./tenant'));

const ApartmentMobile = () => {
  const permission = useAuthorization();

  return (
    <MobileLayout>
      {permission === UserType.HOMEOWNER ? <RoomHomeowner /> : <RoomTenant />}
    </MobileLayout>
  );
};
export default ApartmentMobile;
