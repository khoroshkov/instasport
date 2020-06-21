import React from "react";
import linkedIn from "../assets/img/linkedin.svg";
import styles from "./AboutPage.module.css";

const AboutPage = () => (
  <div className={styles.aboutPageContainer}>
    <h2>Instasport - система автоматизации управления спортивным клубом</h2>
    <hr />
    <p className={styles.author}>
      Site created on React by Nick Khoroshkov{" "}
      <a href="https://www.linkedin.com/in/nick-khoroshkov/" target="_blank" rel="noopener noreferrer">
        <img src={linkedIn} alt="linkedin icon" className={styles.linkedInIcon}/>
      </a>{" "}
    </p>
  </div>
);

export default AboutPage;
