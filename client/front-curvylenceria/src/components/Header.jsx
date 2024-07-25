import React from 'react' ;
import styles from '../css/header.module.css' ;
import logo from '../assets/logo.png' ;

const Header = () => {
  return (
    <div className={styles.header}>
        {/*/ parte izq menu */}
        <div className={styles.header__menu}>
            <i class="bi bi-list-stars"></i>
        </div>
        {/*/ parte central logo*/}
        <div className={styles.header__logo}>
            <img className={styles.header__logo__image } src={logo} alt="logo" />
        </div>
        {/* parte izq usuario*/}
        <div className={styles.header__user}>
            <i class="bi bi-person-heart"></i>
        </div>
    </div>
  )
}

export default Header