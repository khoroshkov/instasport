import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchAllClubs } from "../services/instasport-API";
import ClubList from "../components/ClubList/ClubList";
import CityList from "../components/CityList/CityList";
import ActivityList from "../components/ActivityList/ActivityList";

import styles from "../pages/HomePage.module.css";

export default function ActivitiesPage() {
  const [clubs, setClubs] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const currentPath = location.pathname.slice(12);

  useEffect(() => {
    fetchAllClubs()
      .then((res) => setClubs(res.data))
      .then((error) => setError);
  }, []);

  const activityClubs = clubs.reduce((arr, item) => {
    for (let i = 0; i < item.activity.length; i++) {
      if (item.activity[i].slug === currentPath) {
        arr.push(item);
      }
    }
    return arr;
  }, []);

  return (
    <>
      <h2 className={styles.homePageTitle}>
        Все клубы для занятия {currentPath}{" "}
      </h2>
      <div className={styles.homePageWrapper}>
        {error && (
          <div>
            <p>Ooops... Something get wrong... Try again later</p>
          </div>
        )}
        <ClubList clubs={activityClubs} />
        <div>
          <CityList clubs={clubs} />
          <ActivityList clubs={clubs} />
        </div>
      </div>
    </>
  );
}
