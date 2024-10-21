import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/routes.jsx';
import { LogInProvider } from './LogIn/Context';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LogInProvider>
      <RouterProvider router={routes} />
    </LogInProvider>
  </StrictMode>
);
