import { UserType } from '@/common/constants';
import PcLayout from '@/components/layout/PC/PcLayout';
import { useAuthorization } from '@/hooks';
import { lazy } from 'react';
const HomeTenantPC = lazy(() => import('./tenant'));
const HomeOwnerPC = lazy(() => import('./home-owner'));

const Home = () => {
  const permission = useAuthorization();

  return (
    <PcLayout>
      {permission === UserType.HOMEOWNER ? <HomeOwnerPC /> : <HomeTenantPC />}
    </PcLayout>
  );
};

export default Home;
