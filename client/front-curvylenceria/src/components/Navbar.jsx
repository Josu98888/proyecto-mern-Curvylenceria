import React from "react";
import styles from '../css/navbar.module.css' ;

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav class="navbar ">
        <div class="container-fluid">
          <form class="d-flex" role="search">
            <input
              class="form-control me-2" 
              type="search"
              placeholder="buscar"
              aria-label="buscar"
            />
            <button class="btn btn-light" type="submit">
                buscar
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
