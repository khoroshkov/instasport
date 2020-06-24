import React, {useState, useEffect} from "react";
import routes from "../../services/routes";
import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
import { CSSTransition } from "react-transition-group";
import slide from "../../transitions/slide.module.css";

export function Header () {
  const [isLoaded, setIsloaded] = useState(false)

  useEffect( () =>{
    setTimeout(() => {
      setIsloaded(true)
    }, 1000);
  })

  return(
    <>
    <CSSTransition in={isLoaded} timeout={500} classNames={slide} unmountOnExit>
      <div className={styles.logoContainer}>
        <Link to="/">Instasport</Link>
      </div>
    </CSSTransition>
  <div className={styles.navigationWrapper}>
    
    <ul className={styles.navContainer}>
      <li className={styles.menuList}>
        <NavLink
          to={routes.HOME}
          exact
          className={styles.navigationLink}
          activeStyle={{ color: "#1313fd" }}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.menuList}>
        <NavLink
          to={routes.ABOUT}
          className={styles.navigationLink}
          activeStyle={{ color: "#1313fd" }}
        >
          About
        </NavLink>
      </li>
    </ul>
  </div>
  </>
  )
};

export default Header;
