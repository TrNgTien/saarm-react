import { UserType } from '@/common/constants';
import { useAuthorization } from '@/hooks';
import { lazy } from 'react';

const HeaderTenant = lazy(() => import('./tenant'));
const HeaderHomeowner = lazy(() => import('./home-owner'));

const BottomNav = () => {
  const permission = useAuthorization();

  return permission === UserType.HOMEOWNER ? (
    <HeaderHomeowner />
  ) : (
    <HeaderTenant />
  );
};

export default BottomNav;
