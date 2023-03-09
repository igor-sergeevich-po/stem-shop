import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/footer.module.scss";
import { ROUTES } from "../../utils/routes";
import logo from "../../image/stem.svg";

export const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.home}>
          <img src={logo} alt="logotype stem" />
        </Link>
      </div>

      <div className={styles.rights}>
        Developed by{" "}
        <a
          href="https://rostov.hh.ru/applicant/resumes/view?resume=f9964765ff047e7ebc0039ed1f48576d545664"
          target="_blank"
          rel="noreferrer"
        >
          Igor Po
        </a>
      </div>

      <div className={styles.socials}>
        <a href="https://youtube.com/" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/images/sprite.svg#youtube`} />
          </svg>
        </a>

        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/images/sprite.svg#instagram`} />
          </svg>
        </a>

        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/images/sprite.svg#facebook`} />
          </svg>
        </a>
      </div>
    </section>
  );
};
