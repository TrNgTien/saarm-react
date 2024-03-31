import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { EnvironmentVariables } from './common';
import './index.css';
import { environment } from './utils';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider
      clientId={environment.get(EnvironmentVariables.APP_GOOGLE_CLIENT_ID)}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
);
