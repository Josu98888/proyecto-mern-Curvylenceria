import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home' ;
import Products from '../pages/Products' ;
import CartShopping from '../pages/CartShopping' ;
import Contact from '../pages/Contact' ;
import Login from '../pages/Login' ;
import Register from '../pages/Register' ;
import Error404 from '../pages/Error404';
import Layout from '../layout/Layout';



export const router = createBrowserRouter([
    {
        path: '/' ,
        element: <Layout/> ,
        errorElement: <Error404/> ,
        children: [
            {
                path: '/',
                element: <Home/> ,
            },
            {
                path: '/products' ,
                element: <Products/> ,
            },
            {
                path: '/cartshopping' ,
                element: <CartShopping/> ,
            },
            {
                path: '/contact' ,
                element: <Contact /> ,
            },
            {
                path: '/login' ,
                element: <Login/> ,
            },
            {
                path: '/register' ,
                element: <Register/> ,
            },
        ]
    },
]) 