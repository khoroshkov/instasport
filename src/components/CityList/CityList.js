import React from "react";
import { useHistory } from "react-router-dom";
import { CityListItem } from "../CityListItem/CityListItem";
import styles from "./CityList.module.css"

export default function CityList({ clubs }) {
  const history = useHistory();

  const cities = clubs.map((club) => club.city.title);
  const citiesList = new Set(cities);

  const getByCityHandler = (e) => {
    history.push(`/clubs/${e.target.value}`);
  };

  return (
    <div className={styles.cityListContainer}>
    <p className={styles.citylistTitle}>Найди клуб в своем городе</p>
      <ul className={styles.cityList}>
        {[...citiesList].map((city) => (
          <CityListItem
            city={city}
            title={[...citiesList]}
            getByCityHandler={getByCityHandler}
          />
        ))}
      </ul>
    </div>
  );
}
