import React, { useEffect, useState } from "react";
import { fetchAllClubs } from "../services/instasport-API";
import Loader from "react-loader-spinner";
import ClubList from "../components/ClubList/ClubList";
import CityList from "../components/CityList/CityList";
import ActivityList from "../components/ActivityList/ActivityList";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const [clubs, setClubs] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
    fetchAllClubs()
      .then((res) => setClubs(res.data))
      .then((error) => setError);

    setIsLoaded(false);
  }, []);

  return (
    <>
      {isLoaded && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          className={styles.loader}
        />
      )}
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
