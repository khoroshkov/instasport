import React from "react";
import styles from "./CityListItem.module.css"

export const CityListItem = ({ city, getByCityHandler }) => {
  return (
    <li key={city} className={styles.cityItems}>
    <button type="button" value={city} onClick={getByCityHandler} className={styles.cityBtn}>{city}</button>
  </li>
  )
}
  
