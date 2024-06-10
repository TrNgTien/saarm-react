import { UserType } from '@/common/constants';
import { useAuthorization } from '@/hooks';
import { lazy } from 'react';

const HomeTenantMobile = lazy(() => import('./tenant'));
const HomeOwnerMobile = lazy(() => import('./home-owner'));
const MobileLayout = lazy(
  () => import('@/components/layout/Mobile/MobileLayout'),
);
const HomeMobileLazy = () => {
  const permission = useAuthorization();

  return (
    <MobileLayout>
      {permission === UserType.HOMEOWNER ? (
        <HomeOwnerMobile />
      ) : (
        <HomeTenantMobile />
      )}
    </MobileLayout>
  );
};

export default HomeMobileLazy;
