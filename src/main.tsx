import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import storage from './utils/storage.ts';
import { setAuthorizationHeader } from './api/client.tsx';
import { AuthProvider } from './pages/auth/AuthProvider.tsx';
import { BrowserRouter } from 'react-router-dom';

const accessToken = storage.get('auth');
if (accessToken) {
  setAuthorizationHeader(accessToken);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider defaultIsLogged={!!accessToken}>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
