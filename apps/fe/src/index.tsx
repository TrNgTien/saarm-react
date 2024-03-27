import React from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from "./App";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

const GOOGLE_CLIENT_ID =
  "543999347961-6547ckgqimk73c7r9qcbdkrmvogbii9c.apps.googleusercontent.com";

root.render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <App />
  </GoogleOAuthProvider>;
  </React.StrictMode>
);
