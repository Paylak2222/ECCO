import React from 'react';
import styles from "./eccoTeam.module.css";
import Team1  from "../../assets/images/image-Team-Our/Team1.png"
import Team2  from "../../assets/images/image-Team-Our/Team2.png"
import Team3  from "../../assets/images/image-Team-Our/Team3.png"
import Team4  from "../../assets/images/image-Team-Our/Team4.png"
import Team5  from "../../assets/images/image-Team-Our/Team5.png"
import Team6  from "../../assets/images/image-Team-Our/Team6.png"
import Team7  from "../../assets/images/image-Team-Our/Team7.png"

export default function EccoTeam() {
    const eccoTeam = [
        {
            name: "Sylvia Rzepniewski",
            position: "Minds",
            image: Team1,
        },
        {
            name: "Jen Seo",
            position: "Nabis",
            image: Team2,

        },
        {
            name: "Ford Smith",
            position: "Ultranative",
            image: Team3,
        },
        {
            name: "Elliot Lewis",
            position: "Catalyst",
            image: Team4,
        },
        {
            name: "Thomas Martin",
            position: "Raw Garden",
            image: Team5,
            file: "Team"
        },
        {
            name: "Trent Overholt",
            position: "Noble Pacific",
            image: Team6,
        },
        {
            name: "Jared Ficker",
            position: "Cal Strategies",
            image: Team7,
        },
    ]
        
  return (
    <div className='container'>
        <div className={styles.ourTeamBlock}>
            <div className={styles.ourTeam}>
                <h1 className={styles.ourTitle}>Our Team</h1>
                <p className={styles.ourText}>
                    Our advisory team is comprised of industry leaders and brands who are setting a new standard for ethical production of cannabis products.
                </p>
                <p className={styles.ourText}>
                    They have been invited because they uphold our values, foster innovation and are guiding the industry to a safer place for all consumers.
                </p>
            </div>
            <div className={styles.teamContainer}>
                {eccoTeam.map((ourTeam, index) => (
                    <div key={index} className={styles.teamMember}>
                        <img src={ourTeam.image} alt={ourTeam.name} className={styles.teamImg}/>
                        <h3>{ourTeam.name}</h3>
                        <p>{ourTeam.position}</p>
                    </div>
                ))}
                <div className={styles.teamMember}>
                    <button className={styles.teamButton}
                         onClick={() => alert("Hello Team",)}
                    >
                        Get to Know Us
                    </button>
                    </div>
            </div>
        </div>   
    </div>
  )
}
