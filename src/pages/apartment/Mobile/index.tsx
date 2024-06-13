import { UserType } from '@/common/constants';
import MobileLayout from '@/components/layout/Mobile/MobileLayout';
import { useAuthorization } from '@/hooks';
import { lazy } from 'react';

const ApartmentHomeowner = lazy(() => import('./home-owner'));
const ApartmentTenant = lazy(() => import('./tenant'));

const ApartmentMobile = () => {
  const permission = useAuthorization();

  return (
    <MobileLayout>
      {permission === UserType.HOMEOWNER ? (
        <ApartmentHomeowner />
      ) : (
        <ApartmentTenant />
      )}
    </MobileLayout>
  );
};
export default ApartmentMobile;
