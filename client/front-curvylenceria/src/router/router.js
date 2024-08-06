import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Product from '../pages/Product';
import CartShopping from '../pages/CartShopping';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Error404 from '../pages/Error404';
import Layout from '../layout/Layout';
import FavoritesProvider from '../context/Favorites';
import Favorites from '../pages/Favorites';



export const router = createBrowserRouter([
    {
        path: '/',
        element: <FavoritesProvider> <Layout /> </FavoritesProvider>,
        errorElement: <Error404 />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/products',
                element: <Products /> ,
            },
            {
                path: '/products/:id',
                element:  <Product />,
            },
            {
                path: '/favorites',
                element:  <Favorites/> ,
            },
            {
                path: '/cartshopping',
                element: <CartShopping />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
        ]
    },
]) 