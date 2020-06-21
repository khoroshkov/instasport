import React from "react";
import { useHistory } from "react-router-dom";
import { ActivityListItem } from "./ActivityListItem";
import styles from "./ActivityList.module.css";

export default function ActivityList({ clubs }) {
  const history = useHistory();

  const activities = clubs.map((club) => club.activity.map((act) => act.slug));
  const activitiesList = activities.reduce((arr, item) => {
    return arr.concat(item);
  }, []);
  const activitiestoRender = new Set(activitiesList);

  const getActivityHandler = (e) => {
    history.push(`/activities/${e.target.value}`);
  };

  return (
    <div>
      <ul className={styles.activitiesList}>
        {[...activitiestoRender].map((act, index) => (
          <ActivityListItem
            activity={act}
            title={[...activitiestoRender]}
            getActivityHandler={getActivityHandler}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
}
