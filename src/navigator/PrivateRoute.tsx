import { RoutePath } from '@/common/constants';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { Navigate } from 'react-router-dom';
import { useLocalStorage } from 'react-use';

interface IPrivateRoutesProps {
  children: React.ReactNode;
}
const PrivateRoute = (props: IPrivateRoutesProps) => {
  const { children } = props;
  const [value] = useLocalStorage('token', '', {
    raw: true,
  });

  if (!value) {
    return <Navigate to={RoutePath.WELCOME} replace />;
  }

  const decoded = jwtDecode<JwtPayload>(value);
  const currentTime = new Date();
  const exp = decoded.exp ?? 0;

  if (exp < currentTime.getTime() / 1000) {
    return <Navigate to={RoutePath.WELCOME} replace />;
  }

  return children;
};

export default PrivateRoute;
