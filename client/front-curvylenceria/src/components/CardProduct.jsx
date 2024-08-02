import React from 'react';
import styles from '../css/cardProduct.module.css' ;
import {Link} from 'react-router-dom' ;


const CardProduct = ({item}) => {
  const {image,title,price,_id} = item ;

  return (
    <div className={styles.cardProduct}>
      <div className="card">
        {/* imagen */}
        <img className="card-img-top" src={`http://localhost:4000/${image}`} alt="product" />
        {/* titulo */}
        <h1 className={styles.cardProduct__title}> {title} </h1>
        <div className={styles.cardProduct__containerPriceAndFav}>
            {/* precio */}
            <p className={styles.cardProduct__price}> {price}</p>
            {/* favorito */}
            <i class="bi bi-heart"></i> 
        </div>
        {/* carrito */}
        <div className={styles.cardPoduct__containerCart}>
          <Link className={styles.cardProduct__link}to={`/products/${_id}`} >Ver producto</Link>
          <i class="bi bi-eye"></i>
        </div>
    </div>
    </div>
  )
}

export default CardProduct