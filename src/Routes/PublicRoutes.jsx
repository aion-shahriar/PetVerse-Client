import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Login from "../pages/AuthPage/Login";
import Register from "../pages/AuthPage/Register";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/HomePage/Home";
import AddListing from "../pages/ListingsPage/AddListing";
import PrivateRoute from "./PrivateRoute";
import MyListings from "../pages/ListingsPage/MyListings";
import MyOrders from "../pages/OrdersPage/MyOrders";
import PetsSupplies from "../pages/PetsSuppliesPage/PetsSupplies";
import CategoryFilteredProducts from "../pages/HomePage/CategoryFilteredProducts";

 
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
                path: "pets-supplies",
                Component: PetsSupplies

            },
            {
                path: "/category-filtered-product/:categoryName",
                element: <CategoryFilteredProducts />,
            },
            {
                path: 'add-listing',
                element: <PrivateRoute><AddListing></AddListing></PrivateRoute>
            },
            {
                path: 'my-listings',
                element: <PrivateRoute><MyListings></MyListings></PrivateRoute>
            },
            {
                path: 'my-orders',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },

            
            
            
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
