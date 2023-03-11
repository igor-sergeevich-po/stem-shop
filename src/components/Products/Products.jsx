import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/products.module.scss";

export const Products = ({ title, style = {}, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount);
  console.log(list);

  return (
    <section className={styles.products} style={style}>
      {title && <h2>{title}</h2>}

      <div className={styles.list}>
        {list.map(({ id, images, title, category: { name: titleCategory }, price }) => (
          <Link className={styles.product} to={`/products/${id}`} key={id}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${images[0]})` }}
            />
            <div className={styles.wrapper}>
              <h3 className={styles.title}>{title}</h3>
              <div className={styles.cat}>{titleCategory}</div>
              <div className={styles.info}>
                <div className={styles.prices}>
                  <div className={styles.price}>{price} Ру</div>
                  <div className={styles.oldPrice}>{Math.floor(price * 0.8)} Ру</div>
                </div>
              </div>

              <div className={styles.purchases}>
                {Math.floor(Math.random() * 15 + 3)} purchased
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
