import { UserType } from '@/common/constants';
import { useAuthorization } from '@/hooks';
import { lazy } from 'react';

const BottomNavTenant = lazy(() => import('./tenant'));
const BottomNavHomeowner = lazy(() => import('./home-owner'));

const BottomNav = () => {
  const permission = useAuthorization();

  return permission === UserType.HOMEOWNER ? (
    <BottomNavHomeowner />
  ) : (
    <BottomNavTenant />
  );
};

export default BottomNav;
