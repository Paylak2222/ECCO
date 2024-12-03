import React, { useState } from "react";
import styles from "./navbar.module.css";
import LogoEcco from "../logoEcco/logoEcco";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isSystemOpen, setSystemOpen] = useState(false);
  const [isSystemTowOpen, setSystemTowOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  const toggleSystem = () => {
    setSystemOpen(!isSystemOpen);
    if(isSystemTowOpen){
      setSystemTowOpen(!isSystemTowOpen)
    }
  };

  const toggleSystemTow = () => {
    setSystemTowOpen(!isSystemTowOpen);
    if(isSystemOpen){
      setSystemOpen(!isSystemOpen)
    }
  };

  return (
    <div className="container">
      <nav className={styles.navbar}>
        <LogoEcco />
        <ul
          className={`${styles.menu} ${isMobileMenuOpen ? styles.menuOpen : ""
            }`}
        >
          <li><button className={`${styles.button}`}>About Us</button></li>
          <li className={styles.dropdown}>
            <button
              onClick={toggleSystem}
              className={`${styles.dropdownTrigger} ${styles.button} ${isSystemOpen ? styles.active : ""}`}
            >
              Resources
              <span className={`${styles.arrow} ${isSystemOpen ? styles.rotate : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="#3A3D40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              {isSystemOpen && (
                <ul className={styles.mobileDropdownTwo}>
                  <li>Standards</li>
                  <li>Manual</li>
                  <li>Brand Intake Form</li>
                </ul>
              )}
            </button>

          </li>

          <li className={styles.dropdown}>
            <button
              onClick={toggleSystemTow}
              className={`${styles.dropdownTrigger} ${styles.button}  ${isSystemTowOpen ? styles.active : ""}`}
            >
              ECCOSystem
              <span className={`${styles.arrow} ${isSystemTowOpen ? styles.rotate : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="#3A3D40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>

              {isSystemTowOpen && (
                <ul className={styles.mobileDropdown}>
                  <li>Brands</li>
                  <li>Retailers</li>
                  <li>Labs</li>
                </ul>
              )}
            </button>

          </li>

          <li>Education Hub</li>
            <li className={styles.donateButton}>
              <button type="button">
                Donate
              </button>
            </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
