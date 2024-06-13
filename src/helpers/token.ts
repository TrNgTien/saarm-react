import { JwtPayload, jwtDecode } from 'jwt-decode';

interface IUserToken {
  userId?: string;
  roomId?: string;
  role?: string;
}
export const getDecodedToken = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return;
  }

  return jwtDecode<JwtPayload>(token) as JwtPayload & IUserToken;
};
