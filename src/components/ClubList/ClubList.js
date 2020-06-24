import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ClubListItem from "../ClubListItem/ClubListItem";
import styles from "./ClubList.module.css";
import popTransition from "../../transitions/pop.module.css";

export default function ClubList({ clubs }) {
  return (
    <div>
      <TransitionGroup component="ul" className={styles.ClubList}>
        {clubs.map((club) => (
          <CSSTransition
            key={club.title}
            timeout={200}
            unmountOnExit
            className={popTransition}
          >
            <ClubListItem
              key={club.title}
              link={club.link}
              logo={club.logo}
              title={club.title}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
