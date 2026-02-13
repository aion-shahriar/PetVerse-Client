import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import AuthProvider from './contexts/AuthContext/AuthProvider.jsx';
import { RouterProvider } from 'react-router-dom';
import  { router } from './Routes/PublicRoutes.jsx';
import { ToastContainer } from 'react-toastify';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer>
        <AuthProvider>
        <RouterProvider router={router}>
        </RouterProvider>


      </AuthProvider>
    </ToastContainer>
    
      
    
  </StrictMode>,
)
