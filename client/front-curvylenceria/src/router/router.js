import {createBrowserRouter} from 'react-router-dom' ;
import Home from '../pages/Home' ;
import Products from '../pages/Products' ;
import CartShopping from '../pages/CartShopping' ;
import Contact from '../pages/Contact' ;
import Login from '../pages/Login' ;
import Register from '../pages/Register' ;
import Error404 from '../pages/Error404' ;


const router = createBrowserRouter([
    {
        path: '/' ,
        element: <Home/> ,
        errorElement: <Error404/> , 
    }
    {
        path: '/Products' ,
        element: <Products/> ,
        errorElement: <Error404/> ,
    }
    {
        path: '/CartShopping' ,
        element: <CartShopping/> ,
        errorElement: <Error404/> ,
    }
    {
        path: '/Contact' ,
        element: <Contact/> ,
        errorElement: <Error404/> ,
    }
    {
        path: '/Login' ,
        element: <Login/> ,
        errorElement: <Error404/> ,
    }
    {
        path: '/Register' ,
        element: <Register/> ,
        errorElement: <Error404/> ,
    }
]) 