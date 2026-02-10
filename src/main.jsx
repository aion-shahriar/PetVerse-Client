import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './contexts/AuthContext/AuthProvider.jsx';
import { Rollup } from 'vite';
import { RouterProvider } from 'react-router-dom';
import PublicRoutes from './Routes/PublicRoutes.jsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={PublicRoutes}>
        </RouterProvider>


      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
