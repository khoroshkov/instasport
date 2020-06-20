import React, { useEffect, useState } from "react";
import { fetchAllClubs } from "../services/instasport-API";
import ClubList from "../components/ClubList/ClubList";
import CityList from "../components/CityList/CityList";
import ActivityList from "../components/ActivityList/ActivityList";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const [clubs, setClubs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllClubs()
      .then((res) => setClubs(res.data))
      .then((error) => setError);
  }, []);

  return (
    <>
      <h1 className={styles.homePageTitle}>
        Запишись на тренировку в пару кликов!
      </h1>
      <div className={styles.homePageWrapper}>
        {error && (
          <div>
            <p>Ooops... Something get wrong... Try again later</p>
          </div>
        )}
        {clubs && <ClubList clubs={clubs} />}
        <div>
          <CityList clubs={clubs} />
          <ActivityList clubs={clubs} />
        </div>
      </div>
    </>
  );
}
