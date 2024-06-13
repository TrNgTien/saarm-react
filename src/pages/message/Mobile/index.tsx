import { UserType } from '@/common/constants';
import { useAuthorization } from '@/hooks';
import { lazy } from 'react';
const MobileLayout = lazy(
  () => import('@/components/layout/Mobile/MobileLayout'),
);
const MessageTenant = lazy(() => import('./tenant'));
const MessageHomeOwner = lazy(() => import('./home-owner'));

const Home = () => {
  const permission = useAuthorization();
  return (
    <MobileLayout>
      {permission === UserType.HOMEOWNER ? (
        <MessageHomeOwner />
      ) : (
        <MessageTenant />
      )}
    </MobileLayout>
  );
};

export default Home;
