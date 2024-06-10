import { getDecodedToken } from '@/helpers';
import { useMemo } from 'react';
export const useAuthorization = () => {
  const token = useMemo(getDecodedToken, [getDecodedToken]);
  console.log("checking token", token)

  return true;
};
