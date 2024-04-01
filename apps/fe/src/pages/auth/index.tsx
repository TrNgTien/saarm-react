import { EMethods } from '@/common';
import { RestEndpoints, RoutePath } from '@/common/constants';
import { networkInstance } from '@/services';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { isEmpty } from 'lodash';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface IUserGoogle {
  userId: string;
  username: string;
  firstName: string;
  lastName: string;
}
export const Login: React.FC = () => {
  const navigate = useNavigate();
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
        if (!isEmpty(googleInformation)) {
          navigate(RoutePath.HOME);
        }
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
