import React from "react";
import styles from "./ActivityListItem.module.css"

export const ActivityListItem = ({ activity, getActivityHandler }) => {
  return (
    <li key={activity} className={styles.activityItems}>
      <button type="button" value={activity} onClick={getActivityHandler} className={styles.activityBtn}>
        {activity}
      </button>
    </li>
  );
};
