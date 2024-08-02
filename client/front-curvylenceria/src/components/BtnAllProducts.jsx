import React from "react";
import { Link } from "react-router-dom";
import styles from '../css/button.module.css' ;

const BtnAllProducts = () => {
    return (
        <Link to={`/products`} className={styles.containerBtn}>
            <button className={styles.button}>Todos los productos</button>
        </Link>
    );
};

export default BtnAllProducts;
