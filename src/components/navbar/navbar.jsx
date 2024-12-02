import React, { useState } from "react";
import styles from "./navbar.module.css";
import EccoLogo from "../../assets/images/eccoLogo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isEccoSystemOpen, setEccoSystemOpen] = useState(false);
  const [isEccoSystemtowOpen, setEccoSystemtowOpen] = useState(false);
  const [isEducationHubOpen, setEducationHubOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState); 
  };
  

  const toggleEccoSystem = () => {
    setEccoSystemOpen(!isEccoSystemOpen);
  };
  
  const toggleEccoSystemtow = () => {
    setEccoSystemtowOpen(!isEccoSystemtowOpen);
  };
  const toggleEducationHub = () => {
    setEducationHubOpen(!isEducationHubOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={EccoLogo} alt="Ecco Logo" />
      </div>

      <ul className={`${styles.menu} ${isMobileMenuOpen ? styles.menuOpen : ""}`}>
        <li>About Us</li>
        <li className={styles.dropdown}>
            <button onClick={toggleEccoSystem} className={styles.dropdownTrigger}>
                Resources 
                {isEccoSystemOpen ? <span className={styles.arrow}>▲</span> : <span className={styles.arrow}>▼</span>}
            </button>
            {isEccoSystemOpen && (
                <ul className={styles.mobileDropdownTwo}>
                    <li>Standards</li>
                    <li>Manual</li>
                    <li>Brand Intake Form</li>
                </ul>
            )}
        </li>

            <li className={styles.dropdown}>
            <button onClick={toggleEccoSystemtow} className={styles.dropdownTrigger}>
                ECCOSystem 
                {isEccoSystemtowOpen ? <span className={styles.arrow}>▲</span> : <span className={styles.arrow}>▼</span>}
            </button>
            {isEccoSystemtowOpen && (
                <ul className={styles.mobileDropdown}>
                    <li>Brands</li>
                    <li>Retailers</li>
                    <li>Labs</li>
                </ul>
            )}
            </li>


        <li>Education Hub</li>
        <li className={styles.donateButton}>Donate</li>
      </ul>
    </nav>
  );
};

export default Navbar;
