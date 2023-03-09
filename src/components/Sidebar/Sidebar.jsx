import { v4 as uuid } from "uuid";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import styles from "../../styles/sidebar.module.scss";

export const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);
  // console.dir(list);

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>categories :</div>

      <nav>
        <ul className={styles.menu}>
          {list.map(({ id, name }) => (
            <li key={uuid()}>
              <NavLink
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
                to={`/categories/${id}`}
              >
                {name}
              </NavLink>
            </li>
          ))}
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
