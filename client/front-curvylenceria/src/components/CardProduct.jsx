import React from "react";
import styles from "../css/cardProduct.module.css";
import { Link } from "react-router-dom";
import { useFavoriteContext } from "../context/Favorites.js";

const CardProduct = ({ item }) => {
    const { image, title, price, _id, discount, offer } = item;

    const { favorite, addFavorite } = useFavoriteContext();

    const isFavorite = favorite.some((fav) => fav._id === item._id);

    const priceOffer = price - (price * discount) / 100;

    const haveOffer = () => {
        return offer === true ? (
            <div className="d-flex">
                <p className={styles.cardProduct__price}>
                    {" "}
                    $ {Math.ceil(priceOffer)}
                </p>
                <s className={styles.cardProduct__priceOld}> $ {price} </s>
            </div>
        ) : (
            <p className={styles.cardProduct__price}> ${priceOffer}</p>
        );
    };
    const blockFavorite = (item) => {
        return (
            <div onClick={() => addFavorite(item)}>
                {isFavorite ? (
                    <i
                        className="bi bi-heart-fill"
                        style={{ color: "red" }}
                    ></i>
                ) : (
                    <i className="bi bi-heart"></i>
                )}
            </div>
        );
    };

    return (
        <div className={styles.cardProduct}>
            <div className="card">
                {/* imagen */}
                <img
                    className="card-img-top"
                    src={`http://localhost:4000/${image}`}
                    alt="product"
                />
                {/* titulo */}
                <h1 className={styles.cardProduct__title}> {title} </h1>
                <div className={styles.cardProduct__containerPriceAndFav}>
                    {/* precio */}
                    {haveOffer()}
                    {/* favorito */}
                    {blockFavorite(item)}
                </div>
                {/* carrito */}
                <div className={styles.cardPoduct__containerCart}>
                    <Link
                        className={styles.cardProduct__link}
                        to={`/products/${_id}`}
                    >
                        Ver producto
                    </Link>
                    <i class="bi bi-eye"></i>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
