import { UserType } from '@/common/constants';
import { getDecodedToken } from '@/helpers';
import { useMemo } from 'react';

export const useAuthorization = (): string => {
  const token = useMemo(getDecodedToken, [getDecodedToken]);

  if (!token?.role && !UserType.isValid(token?.role || '')) {
    throw Error('not-found');
  }

  return token?.role ?? '';
};
