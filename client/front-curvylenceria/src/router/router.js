import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home' ;
import Products from '../pages/Products' ;
import CartShopping from '../pages/CartShopping' ;
import Contact from '../pages/Contact' ;
import Login from '../pages/Login' ;
import Register from '../pages/Register' ;
import Error404 from '../pages/Error404';



export const router = createBrowserRouter([
    {
        path: '/' ,
        element: <Home/> ,
        errorElement: <Error404/> ,
    },
    {
        path: '/products' ,
        element: <Products/> ,
        errorElement: <Error404/> ,
    },
    {
        path: '/cartshopping' ,
        element: <CartShopping/> ,
        errorElement: <Error404/> ,
    },
    {
        path: '/contact' ,
        element: <Contact /> ,
        errorElement: <Error404/> ,
    },
    {
        path: '/login' ,
        element: <Login/> ,
        errorElement: <Error404/> ,
    },
    {
        path: '/register' ,
        element: <Register/> ,
        errorElement: <Error404/> ,
    },
]) 