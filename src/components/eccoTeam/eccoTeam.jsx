import React from "react";
import styles from "./eccoTeam.module.css";
import Team1 from "../../assets/images/peoples/Sylvia.png";
import Team2 from "../../assets/images/peoples/Ford Smith Headshot.jpg";
import Team3 from "../../assets/images/peoples/Thomas_Martin Headshot .JPG";
import Team4 from "../../assets/images/peoples/Trent Overholt Headshot.png";
import Team5 from "../../assets/images/peoples/elliot.jpeg";
import Team6 from "../../assets/images/peoples/Anresco.png";
import Team7 from "../../assets/images/peoples/Infinite Labs.png";

import { Link } from "react-router-dom";

export default function EccoTeam() {
  const eccoTeam = [
    {
      name: "Sylvia Rzepniewski",
      position: "Interim Executive Director",
      image: Team1,
    },
    {
      name: "Ford Smith",
      position: "ECCO Founding Member",
      image: Team2,
    },
    {
      name: "Thomas Martin",
      position: "ECCO Founding Member",
      image: Team3,
    },
    {
      name: "Trent Overholt",
      position: "ECCO Founding Member",
      image: Team4,
    },
    {
      name: "Elliot Lewis",
      position: "ECCO Founding Member",
      image: Team5,
      file: "Team",
    },
    {
      name: "Anresco Laboratories",
      position: "LAB 1",
      image: Team6,
    },
    {
      name: "Infinite Chemical Analysis Labs",
      position: "LAB 2",
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
            <Link to="/system">
              <button className={styles.teamButton}>
                Get to Know the ECCOsystem
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
