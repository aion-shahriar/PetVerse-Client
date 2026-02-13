import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Login from "../pages/AuthPage/Login";
import Register from "../pages/AuthPage/Register";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/HomePage/Home";
import AddListing from "../pages/ListingsPage/AddListing";
import PrivateRoute from "./PrivateRoute";

 
 export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home

            },
            {
                path: 'add-listing',
                element: <PrivateRoute><AddListing></AddListing></PrivateRoute>
            }
            
            
            
        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    }

    
 ]);
