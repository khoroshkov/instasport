import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./ActivityListItem.module.css";

export const ActivityListItem = ({ activity, getActivityHandler }) => {
  const location = useLocation();
  const currentPath = location.pathname.slice(12);
  return (
    <li key={activity} className={styles.activityItems}>
      <button
        type="button"
        value={activity}
        onClick={getActivityHandler}
        className={currentPath !== activity ? styles.activityBtn : styles.activityBtnActive}
      >
        {activity}
      </button>
    </li>
  );
};
