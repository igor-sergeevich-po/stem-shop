import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/header.module.scss";
import { ROUTES } from "../../utils/routes";
import logo from "../../image/stem.svg";
import avatar from "../../image/woman-avatar.avif";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.home}>
          <img src={logo} alt="logotype stem" />
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.user}>
          <img src={avatar} className={styles.avatar} alt="avatar" />
          <div className={styles.username}>guest</div>
        </div>

        <form className={styles.form}>
          <div className={styles.icon}>
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/images/sprite.svg#search`} />
            </svg>
          </div>
          <div className={styles.input}>
            <input
              type="search"
              name="search"
              placeholder="Search..."
              autoComplete="off"
              onChange={() => {}}
              value=""
            />
          </div>

          {false && <div className={styles.box}></div>}
        </form>

        <div className={styles.account}>
          <Link to={ROUTES.home} className={styles.favourites}>
            <svg className={styles["icon-fav"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/images/sprite.svg#heart`} />
            </svg>
          </Link>
          <Link to={ROUTES.cart} className={styles.favourites}>
            <svg className={styles["icon-cart"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/images/sprite.svg#bag`} />
            </svg>
            <span className="styles.count">3</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
