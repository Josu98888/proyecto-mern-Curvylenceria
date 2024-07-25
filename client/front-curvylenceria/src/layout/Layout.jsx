import React from 'react' ;
import Header from '../components/Header' ;
import Navbar from '../components/Navbar' ;
import { Outlet } from 'react-router-dom' ;

const Layout = () => {
  return (
    <>
        <Header/>
        <Navbar/>
        <Outlet/>
        {/*pages*/}
        {/*  ... */}
       { /*redes */}
        {/* ... */}
        {/*footer*/}
    </>
  )
}

export default Layout