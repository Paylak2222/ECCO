import React from "react";
import styles from "./eccoTeam.module.css";
import Team1 from "../../assets/images/peoples/Sylvia.jpg";
import Team2 from "../../assets/images/peoples/Ford Smith Headshot.jpg";
import Team3 from "../../assets/images/peoples/Thomas_Martin Headshot .jpg";
import Team4 from "../../assets/images/peoples/Trent Overholt Headshot.jpg";
import Team5 from "../../assets/images/peoples/elliot.jpg";
import Team6 from "../../assets/images/peoples/Anresco.png";
import Team7 from "../../assets/images/peoples/Infinite Labs.png";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function EccoTeam() {
  const eccoTeam = [
    {
      name: "Sylvia Rzepniewski",
      position: "Interim Executive Director",
      image: Team1,
    },
    {
      name: "Elliot Lewis",
      position: "ECCO Founding Member",
      image: Team5,
      file: "Team",
    },
    {
      name: "Thomas Martin",
      position: "ECCO Founding Member",
      image: Team3,
    },
    {
      name: "Ford Smith",
      position: "ECCO Founding Member",
      image: Team2,
    },
  
    {
      name: "Trent Overholt",
      position: "ECCO Founding Member",
      image: Team4,
    },

    {
      name: "Anresco Laboratories",
      position: "Lab Partner",
      image: Team6,
    },
    {
      name: "Infinite Chemical Analysis Labs",
      position: "Lab Partner",
      image: Team7,
    },
  ];

  return (
    <div className="container">
      <div className={styles.ourTeamBlock}>
        <div className={styles.ourTeam}>
          <h1 className={styles.ourTitle}>Our team</h1>
          <p className={styles.ourText}>
            Our advisory team is comprised of industry leaders and brands who
            are setting a new standard for ethical production of cannabis
            products.
          </p>
          <p className={styles.ourText}>
            They have been invited because they uphold our values, foster
            innovation and are guiding the industry to a safer place for all
            consumers.
          </p>
        </div>
        <div className={styles.teamContainer}>
          {eccoTeam.map((ourTeam, index) => (
            <div key={index} className={styles.teamMember}>
              <img
                src={ourTeam.image}
                alt={ourTeam.name}
                className={styles.teamImg}
              />
              <h3>{ourTeam.name}</h3>
              <p>{ourTeam.position}</p>
            </div>
          ))}
          <div className={styles.teamMember}>
            <HashLink to="/system#Founders">
              <button className={styles.teamButton}>
                Get to Know the ECCOsystem
              </button>
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
}
