import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./menu.module.css";
import BurgerIcon from "../../assets/images/burger-icon.svg";
import LogoEcco from "../logoEcco/logoEcco";
import CloseIcon from "../../assets/images/x-close.svg";
import instagram from "../../assets/images/intsa.png";
import twitter from "../../assets/images/twitter.png";
import link from "../../assets/images/link.png";
import facebook from "../../assets/images/Facebook.png";
const Menu = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isEccoSystemOpen, setEccoSystemOpen] = useState(false);
  const [isEccoSystemtowOpen, setEccoSystemtowOpen] = useState(false);

  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  const toggleEccoSystem = () => {
    setEccoSystemOpen(!isEccoSystemOpen);
    if (isEccoSystemtowOpen) {
      setEccoSystemtowOpen(!isEccoSystemtowOpen);
    }
  };

  const toggleEccoSystemtow = () => {
    setEccoSystemtowOpen(!isEccoSystemtowOpen);
    if (isEccoSystemOpen) {
      setEccoSystemOpen(!isEccoSystemOpen);
    }
  };
  const openBurgerHandler = () => {
    setBurgerOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.menuWrapper}>
      <ul
        className={`${styles.menu} ${isMobileMenuOpen ? styles.menuOpen : ""}`}
      >
        <li>
          <Link to="/explore">
            <button className={`${styles.button}`}>About Us</button>
          </Link>
        </li>
        <li className={styles.dropdown}>
          <button
            onClick={toggleEccoSystem}
            className={`${styles.dropdownTrigger} ${styles.button} ${
              isEccoSystemOpen ? styles.active : ""
            }`}
          >
            Resources
            <span
              className={`${styles.arrow} ${
                isEccoSystemOpen ? styles.rotate : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="#3A3D40"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
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
            className={`${styles.dropdownTrigger} ${styles.button}  ${
              isEccoSystemtowOpen ? styles.active : ""
            }`}
          >
            ECCOSystem
            <span
              className={`${styles.arrow} ${
                isEccoSystemtowOpen ? styles.rotate : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="#3A3D40"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
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

        <li>
          <Link to="/system">
            <button className={`${styles.button}`}>Education Hub</button>
          </Link>
        </li>
        <li className={styles.donateButton}>
          <button type="button">Donate</button>
        </li>
      </ul>
      <div className={styles.logo}>
        <Link to="/">
          <LogoEcco />
        </Link>
      </div>
      <div
        className={`${styles.burger} ${isBurgerOpen ? styles.close : ""}`}
        onClick={openBurgerHandler}
      >
        <img src={isBurgerOpen ? CloseIcon : BurgerIcon} />
      </div>
      {isBurgerOpen && (
        <ul
          className={`${styles.burgerMenu} ${
            isMobileMenuOpen ? styles.menuOpen : ""
          }`}
        >
          <li>
            <Link to="/explore">
              <button className={`${styles.button}`}>About Us</button>
            </Link>
          </li>
          <li
            className={`${styles.dropdown} ${styles.button} ${
              isEccoSystemOpen ? styles.active : ""
            }`}
          >
            <button
              onClick={toggleEccoSystem}
              className={`${styles.dropdownTrigger} ${styles.button} ${
                isEccoSystemOpen ? styles.active : ""
              }`}
            >
              Resources
              <span
                className={`${styles.arrow} ${
                  isEccoSystemOpen ? styles.rotate : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="#3A3D40"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </button>
            {isEccoSystemOpen && (
              <div className={styles.mobileDropdownTwo}>
                <div>Standards</div>
                <div>Manual</div>
                <div>Brand Intake Form</div>
              </div>
            )}
          </li>

          <li
            className={`${styles.dropdown} ${styles.button} ${
              isEccoSystemtowOpen ? styles.active : ""
            }`}
          >
            <button
              onClick={toggleEccoSystemtow}
              className={`${styles.dropdownTrigger} ${styles.button}  ${
                isEccoSystemtowOpen ? styles.active : ""
              }`}
            >
              ECCOSystem
              <span
                className={`${styles.arrow} ${
                  isEccoSystemtowOpen ? styles.rotate : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="#3A3D40"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </button>
            {isEccoSystemtowOpen && (
              <div className={styles.mobileDropdownTwo}>
                <div>Brands</div>
                <div>Retailers</div>
                <div>Labs</div>
              </div>
            )}
          </li>

          <li>
            <Link to="/system">
              <button className={`${styles.button}`}>Education Hub</button>
            </Link>
          </li>
          <li className={styles.donateButton}>
            <button type="button">Donate</button>
          </li>
          <li className={styles.social}>
            <div className={styles.icon}>
              <img src={facebook} alt="Facebook" />
            </div>
            <div className={styles.icon}>
              <img src={twitter} alt="Twitter" />
            </div>
            <div className={styles.icon}>
              <img src={link} alt="LinkedIn" />
            </div>
            <div className={styles.icon}>
              <img src={instagram} alt="Instagram" />
            </div>
          </li>
          <li className={styles.allRights}>
            <span>@2024 ECCO. All rights reserved</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Menu;
