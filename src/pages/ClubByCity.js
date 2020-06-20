import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchAllClubs } from "../services/instasport-API";
import ClubList from "../components/ClubList/ClubList";
import CityList from "../components/CityList/CityList";
import ActivityList from "../components/ActivityList/ActivityList";
import styles from "../pages/HomePage.module.css";

export default function ClubByCity(city = "Киев") {
  const [clubs, setClubs] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const currentPath = location.pathname.slice(7);

  useEffect(() => {
    fetchAllClubs()
      .then((res) => setClubs(res.data))
      .then((error) => setError);
  }, []);

  const cityClubs = clubs.filter((club) => club.city.title === currentPath);

  return (
    <>
      <h2 className={styles.homePageTitle}>Все клубы в городе {currentPath}</h2>
      <div className={styles.homePageWrapper}>
        {error && (
          <div>
            <p>Ooops... Something get wrong... Try again later</p>
          </div>
        )}
        <ClubList clubs={cityClubs} />
        <div>
          <CityList clubs={clubs} />
          <ActivityList clubs={clubs} />
        </div>
      </div>
    </>
  );
}
