import { RoutePath } from '@/common/constants';
import { useAppSelector } from '@/hooks/redux.hook';
import { RootState } from '@/redux/store';
import { Navigate } from 'react-router-dom';

interface IPrivateRoutesProps {
  children: React.ReactNode;
}
const PrivateRoute = (props: IPrivateRoutesProps) => {
  const { children } = props;
  const token = useAppSelector((state: RootState) => state.user.token);

  return !token ? <Navigate to={RoutePath.WELCOME} replace /> : children;
};

export default PrivateRoute;
