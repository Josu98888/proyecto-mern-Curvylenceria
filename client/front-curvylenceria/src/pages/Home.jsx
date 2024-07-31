import React from 'react';
import SliderProducts from '../components/SliderProducts';

const Home = () => {
  return (
    <div>

      { /*destacado*/}
      <div>
        <SliderProducts /> 
      </div>
      { /*Todos los productos*/}
      <div>
        <h2>Todos los productos</h2>
      </div>
      { /*más elegidos*/}
      <div>
        <h2>Más elegidos</h2>
      </div>
      { /*ofertas */}
      <div>
        <h2>Ofertas</h2>
      </div>
    </div>
  )
}

export default Home