import { EMethods } from '@/common';
import { RestEndpoints } from '@/common/constants';
import { networkInstance } from '@/services';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { useCallback } from 'react';

interface IUserGoogle {
  userId: string;
  username: string;
  firstName: string;
  lastName: string;
}
export const Login: React.FC = () => {
  const handleLoginGoogle = useCallback(
    async (credentialResponse: CredentialResponse) => {
      try {
        const googleInformation: IUserGoogle = await networkInstance.send({
          method: EMethods.POST,
          path: RestEndpoints.LOGIN,
          body: {
            token: credentialResponse.credential,
          },
        });
      } catch (e) {
        console.error('[handleLoginGoogle] | %s', e);
      }
      // localStorage.setItem("AuthData", JSON.stringify(data));
      // setAuthData(data);
    },
    [],
  );

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <GoogleLogin
        useOneTap={true}
        onSuccess={handleLoginGoogle}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
};
