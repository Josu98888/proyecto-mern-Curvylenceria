import React from "react";
import SliderProducts from "../components/SliderProducts";
import BtnAllProducts from "../components/BtnAllProducts";
import ProductsOffer from "../components/ProductsOffer";
import ButtonAllOffers from "../components/ButtonAllOffers";
import SocialNetworks from "../components/SocialNetworks";

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
            {/*Redes sociales*/}
            <div>
                <SocialNetworks />
            </div>
            {/*ofertas */}
            <div>
                <ProductsOffer />
            </div>
            {/*Todos las ofertas*/}
            <div>
                <ButtonAllOffers />
            </div>
        </div>
    );
};

export default Home;
