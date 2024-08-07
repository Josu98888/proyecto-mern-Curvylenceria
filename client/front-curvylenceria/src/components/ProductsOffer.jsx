import React, { useEffect, useState } from "react";
import styles from "../css/titles.module.css";
import { getProductsFetch } from '../api/getProductsFetch';
import CardProduct from "./CardProduct";

const ProductsOffer = () => {
     const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsFetch()
            .then((data) => setProducts(data))
            .catch((error) => console.log(error));
    }, []);

    const offers = products.filter(e => e.offer === true);
    return (
        <div>
            <h2 className={styles.title }>Ofertas</h2>
            {offers.map((item) => (
            <div className='col-6 col-md-4 col-lg-3' >
                <CardProduct key={item._id} item={item} />
            </div>
        ))}
        </div>
    );
}

export default ProductsOffer