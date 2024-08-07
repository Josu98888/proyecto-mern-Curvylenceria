import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/button.module.css";

const ButtonAllOffers = () => {
    return (
        <Link to={`/offers`} className={styles.containerBtn}>
            <button className={styles.button}>Todos las ofertas</button>
        </Link>
    );
};

export default ButtonAllOffers;
