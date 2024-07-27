import React from "react";
import styles from "../css/footer.module.css";
import logo from "../assets/loguito.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/*parte arriba*/}
      <div className={styles.footer__logo}>
        <img className={styles.footer__logo__img} src={logo} alt="logo" />
      </div>
      {/*parte central*/}
      <div className={styles.footer__redes}>
        <div className={styles.footer__redes__redSocial}>
          <i class="bi bi-tiktok"></i>
        </div>
        <div className={styles.footer__redes__redSocial}>
          <i class="bi bi-instagram"></i>
        </div>
        <div className={styles.footer__redes__redSocial}>
          <i class="bi bi-facebook"></i>
        </div>
      </div>
      {/*parte abajo*/}
       <div className={styles.footer__copyright}>
          <h5 className={styles.footer__copyright__text}>
            Derechos reservados ©
          </h5>
       </div>
    </div>
  );
};

export default Footer;
