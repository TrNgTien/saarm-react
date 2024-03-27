import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useCallback } from 'react';

// import { CredentialResponse } from "../interfaces/google";

export const Login: React.FC = () => {
  // const { mutate: login } = useLogin<CredentialResponse>();

  const handleLoginGoogle = useCallback(
    async (credentialResponse: CredentialResponse) => {
      try {
        const { data } = await axios.post(
          'http://localhost:3000/api/v1/login',
          {
            token: credentialResponse.credential,
          },
        );
        console.log('dataaa', data);
      } catch (e) {
        console.error('[handleLoginGoogle] | %s', e);
      }
      //
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
