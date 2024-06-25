import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul className={styles.menu}>
        <li>
          <NavLink to="/product" className={styles.menu__link}>
            Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/pricing" className={styles.menu__link}>
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
