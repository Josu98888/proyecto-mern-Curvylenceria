import React from "react";
import SliderProducts from "../components/SliderProducts";
import BtnAllProducts from "../components/BtnAllProducts";
import Favorites from "./Favorites";

const Home = () => {
    return (
        <div>
            {/*destacado*/}
            <div>
                <SliderProducts />
            </div>
            {/*Todos los productos*/}
            <div>
                <BtnAllProducts />
            </div>
            {/*más elegidos*/}
            <div>
            <Favorites />
            </div>
            {/*ofertas */}
            <div>
                <h2>Ofertas</h2>
            </div>
        </div>
    );
};

export default Home;
