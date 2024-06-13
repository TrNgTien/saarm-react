import { UserType } from '@/common/constants';
import { useAuthorization } from '@/hooks';
import { lazy } from 'react';

const HomownerPC = lazy(() => import('./home-owner'));
const TenantPC = lazy(() => import('./tenant'));
const PcLayout = lazy(() => import('@/components/layout/PC/PcLayout'));

const MessagePC = () => {
  const permission = useAuthorization();

  return (
    <PcLayout>
      {permission === UserType.HOMEOWNER ? <HomownerPC /> : <TenantPC />}
    </PcLayout>
  );
};

export default MessagePC;
