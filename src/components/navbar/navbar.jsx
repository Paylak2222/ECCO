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
    if(isEccoSystemtowOpen){
      setEccoSystemtowOpen(!isEccoSystemtowOpen)
    }
  };

  const toggleEccoSystemtow = () => {
    setEccoSystemtowOpen(!isEccoSystemtowOpen);
    if(isEccoSystemOpen){
      setEccoSystemOpen(!isEccoSystemOpen)
    }
  };

  return (
    <div className="container">
      <nav className={styles.navbar}>
        <LogoEcco />
        <ul
          className={`${styles.menu} ${
            isMobileMenuOpen ? styles.menuOpen : ""
          }`}
        >
          <li>About Us</li>
          <li className={styles.dropdown}>
            <button
              onClick={toggleEccoSystem}
              className={styles.dropdownTrigger}
            >
              Resources
              {isEccoSystemOpen ? (
                <span className={styles.arrow}>▲</span>
              ) : (
                <span className={styles.arrow}>▼</span>
              )}
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
            <button
              onClick={toggleEccoSystemtow}
              className={styles.dropdownTrigger}
            >
              ECCOSystem
              {isEccoSystemtowOpen ? (
                <span className={styles.arrow}>▲</span>
              ) : (
                <span className={styles.arrow}>▼</span>
              )}
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
