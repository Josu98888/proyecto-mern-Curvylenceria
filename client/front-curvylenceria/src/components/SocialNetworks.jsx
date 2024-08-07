import React from "react";
import style from "../css/titles.module.css";
import styles from "../css/socialNetworks.module.css";
import logo from "../assets/loguito.png";

const SocialNetworks = () => {
    return (
        <div className={styles.socialNetworks}>
            <h1 className={style.title}>Seguinos en redes</h1>
            <div className={styles.socialNetworks__logo}>
                <img
                    className={styles.socialNetworks__logo__img}
                    src={logo}
                    alt="logo"
                />
            </div>
            <div className={styles.socialNetworks__redes}>
                <div className={styles.socialNetworks__redes__redSocial}>
                    <i class="bi bi-tiktok light"></i>
                </div>
                <div className={styles.socialNetworks__redes__redSocial}>
                    <i class="bi bi-instagram"></i>
                </div>
                <div className={styles.socialNetworks__redes__redSocial}>
                    <i class="bi bi-facebook"></i>
                </div>
            </div>
        </div>
    );
};

export default SocialNetworks;
