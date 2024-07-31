import React, { useEffect, useState } from 'react' ;
import CardProduct from '../components/CardProduct' ;
import styles from '../css/cardProduct.module.css' ;
import {getProductsFetch} from '../api/getProductsFetch' ;

const Products = () => {
  const [products, setProducts] = useState([]) ;

  useEffect(() => {
    getProductsFetch() 
    .then( (data) => setProducts(data)) 
    .catch((error) => console.log(error)) ;
  }, []) ;

  return (
    <div>
      <h2 className={styles.products_title}>Productos</h2>
      <div className='row'>
        {products.map((item) => (
          <div className='col-6 col-md-4 col-lg-3'>
            <CardProduct key={item._id} item={item} /> 
          </div>
        )) }
      </div>
    </div>
  )
}

export default Products