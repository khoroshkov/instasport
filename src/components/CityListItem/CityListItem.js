import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./CityListItem.module.css";

export const CityListItem = ({ city, getByCityHandler }) => {
  const location = useLocation();
  const currentPath = location.pathname.slice(7);

  return (
    <li key={city} className={styles.cityItems}>
      <button
        type="button"
        value={city}
        onClick={getByCityHandler}
        className={currentPath !== city ? styles.cityBtn : styles.cityBtnActive}
      >
        {city}
      </button>
    </li>
  );
};
