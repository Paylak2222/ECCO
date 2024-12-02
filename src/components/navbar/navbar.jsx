import React, { useState } from "react";
import styles from "./navbar.module.css";
import LogoEcco from "../logoEcco/logoEcco";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isEccoSystemOpen, setEccoSystemOpen] = useState(false);
  const [isEccoSystemtowOpen, setEccoSystemtowOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  const toggleEccoSystem = () => {
    setEccoSystemOpen(!isEccoSystemOpen);
  };

  const toggleEccoSystemtow = () => {
    setEccoSystemtowOpen(!isEccoSystemtowOpen);
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
              onClick={toggleEccoSystem}
              className={`${styles.dropdownTrigger} ${styles.button} ${isEccoSystemOpen ? styles.active : ""}`}
            >
              Resources
              <span className={`${styles.arrow} ${isEccoSystemOpen ? styles.rotate : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="#3A3D40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              {isEccoSystemOpen && (
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
              onClick={toggleEccoSystemtow}
              className={`${styles.dropdownTrigger} ${styles.button}  ${isEccoSystemtowOpen ? styles.active : ""}`}
            >
              ECCOSystem
              <span className={`${styles.arrow} ${isEccoSystemtowOpen ? styles.rotate : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="#3A3D40" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>

              {isEccoSystemtowOpen && (
                <ul className={styles.mobileDropdown}>
                  <li>Brands</li>
                  <li>Retailers</li>
                  <li>Labs</li>
                </ul>
              )}
            </button>

          </li>

          <li><button className={`${styles.button}`}>Education Hub</button></li>
          <li className={styles.donateButton}>Donate</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
