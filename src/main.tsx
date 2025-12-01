import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ThemeProvider } from './ThemeContext';

import './index.css';
import './App.css';

import appRoutes from './AppRoutes.tsx';
import { RouterProvider } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <StrictMode>
      <RouterProvider router={appRoutes} />
    </StrictMode>
  </ThemeProvider>
);
