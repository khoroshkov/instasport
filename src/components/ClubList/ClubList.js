import React from "react";
import ClubListItem from "../ClubListItem/ClubListItem";
import styles from "./ClubList.module.css"

export default function ClubList({ clubs }) {
  return (
    <div>
      <ul className={styles.ClubList}>
        {clubs.map((club) => (
          <ClubListItem key={club.title} link={club.link} logo={club.logo} title={club.title} />
        ))}
      </ul>
    </div>
  );
}
