import { GoogleOAuthProvider } from '@react-oauth/google';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { EnvironmentVariables } from './common';
import './index.css';
import { environment } from './utils';

const rootDom = ReactDOM.createRoot(document.getElementById('root')!);

const MainApplication = () => {
  useEffect(() => {
    window.location.reload();
  }, []);

  return (
    <React.StrictMode>
      <GoogleOAuthProvider
        clientId={environment.get(EnvironmentVariables.APP_GOOGLE_CLIENT_ID)}>
        <App />
      </GoogleOAuthProvider>
    </React.StrictMode>
  );
};

rootDom.render(<MainApplication />);
