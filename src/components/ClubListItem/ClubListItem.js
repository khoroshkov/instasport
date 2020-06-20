import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./ClubListItem.module.css";

const ClubListItem = ({ link, logo, title }) => (
  <li key={title} className={styles.clubListItems}>
    <div className={styles.clubListItemContainer}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={logo} alt={title} />
        <p className={styles.clubListItemTitle}>{title}</p>
      </a>
    </div>
  </li>
);

export default withRouter(ClubListItem);
