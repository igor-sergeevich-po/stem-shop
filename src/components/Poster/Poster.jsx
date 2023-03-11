import React from "react";

// import bestseller from "../../image/starVr.png";
import pc from "../../image/htc-cosmos-elite.png";

import styles from "../../styles/home.module.scss";

export const Poster = () => {
  return (
    <section className={styles.home}>
      <div className={styles.title}>Wow Sale 35%</div>
      <div className={styles.product}>
        <div className={styles.text}>
          <div className={styles.subtitle}>the bestseller of 2023</div>
          <h1 className={styles.head}>advanced technologies !!!</h1>
          <button className={styles.button}>Buy now</button>
        </div>
        <div className={styles.image}>
          <img src={pc} alt="bestseller" />
        </div>
      </div>
    </section>
  );
};
