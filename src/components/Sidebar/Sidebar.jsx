import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../styles/sidebar.module.scss";

export const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>categories</div>

      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink to={`/categories/${1}`}>shorts</NavLink>
          </li>
          <li>
            <NavLink to={`/categories/${2}`}>boots</NavLink>
          </li>
          <li>
            <NavLink to={`/categories/${2}`}>nike</NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.footer}>
        <a href="/help" className={styles.link} target="_blank">
          help
        </a>

        <a
          href="/terms"
          style={{ textDecoration: "underline" }}
          className={styles.link}
          target="_blank"
        >
          Terms & Conditions
        </a>
      </div>
    </section>
  );
};
