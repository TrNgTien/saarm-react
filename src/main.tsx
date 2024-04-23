import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';
import App from './App';
import { EnvironmentVariables } from './common';
import './index.css';
import { environment } from './utils';

const rootDom = ReactDOM.createRoot(document.getElementById('root')!);

const MainApplication = () => {
  registerSW({ immediate: true, onOfflineReady() {}, onNeedRefresh() {} });
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
