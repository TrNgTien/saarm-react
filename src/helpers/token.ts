import { JwtPayload, jwtDecode } from 'jwt-decode';

export const getDecodedToken = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return;
  }

  return jwtDecode<JwtPayload>(token) as JwtPayload & {
    userId?: string;
    roomId?: string;
  };
};
