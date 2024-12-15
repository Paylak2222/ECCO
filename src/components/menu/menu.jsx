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
import { HashLink } from "react-router-hash-link";
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
                <li><a target="_blank" href="https://docs.google.com/document/d/1Npz7QUUjnStWYBT0hvBe8d2ysTrwir4eKzv1hSg2HJM/edit?usp=sharing">Overview</a></li>
                <li><a target="_blank" href="https://docs.google.com/document/d/19rtNl41csjsiHQkTDRxm0IO7Cx5SVnqnM4n5E9nt0WI/edit?usp=sharing">Manual</a></li>
                <li><a target="_blank" href="https://docs.google.com/document/d/1R_3YVtNdOrHnUAM2DCO7e_SZTigSD8cn/edit?usp=sharing&ouid=113439082160299838218&rtpof=true&sd=true">Standards</a></li>
                <li><a target="_blank" href="https://www.canva.com/design/DAGRnI6g0s4/3WQEbUP2G91zH4I5nlw9_A/view" >Deck</a></li>
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
            ECCOsystem
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
                <HashLink  to="/system#Founders"><li>Founders</li></HashLink >
                <HashLink  to="/system#Technical Advisers"><li>Technical Advisers</li></HashLink >
                <HashLink  to="/system#Advisory Board"><li>Advisory Board</li></HashLink >
                <HashLink  to="/system#labs"><li>Labs</li></HashLink >
              </ul>
            )}
          </button>
        </li>

        <li>
          <a href="https://ecco-cannabis.notion.site/" target="_blank">
            <button className={`${styles.button}`}>Education Hub</button>
          </a>
        </li>
        <li className={styles.donateButton}>
          <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfREMu28r_Ke5aymalLEk3gchlCaVJ7jxdW2t0q0dIF4H11lg/viewform?usp=send_form"><button type="button">Apply as a Brand</button></a>
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
                <div><a target="_blank" href="https://docs.google.com/document/d/1Npz7QUUjnStWYBT0hvBe8d2ysTrwir4eKzv1hSg2HJM/edit?usp=sharing">Overview</a></div>
                <div><a target="_blank" href="https://docs.google.com/document/d/19rtNl41csjsiHQkTDRxm0IO7Cx5SVnqnM4n5E9nt0WI/edit?usp=sharing">Manual</a></div>
                <div><a target="_blank" href="https://docs.google.com/document/d/1R_3YVtNdOrHnUAM2DCO7e_SZTigSD8cn/edit?usp=sharing&ouid=113439082160299838218&rtpof=true&sd=true">Standards</a></div>
                <div><a target="_blank" href="https://www.canva.com/design/DAGRnI6g0s4/3WQEbUP2G91zH4I5nlw9_A/view" >Deck</a></div>
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
              ECCOsystem
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
              <div className={styles.mobileDropdownTwo} onClick={()=>{
                window.location.hash = "/system";
              }}>
                <div><HashLink to="/system#Founders">Founders</HashLink></div>
                <div><HashLink to="/system#Technical Advisers">Technical Advisers</HashLink></div>
                <div><HashLink to="/system#Advisory Board">Advisory Board</HashLink></div>
                <div><HashLink to="/system#labs">Labs</HashLink></div>
              </div>
            )}
          </li>

          <li>
          <a href="https://ecco-cannabis.notion.site/" target="_blank">
              <button className={`${styles.button}`}>Education Hub</button>
            </a>
          </li>
          <li className={styles.donateButton}>
          <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfREMu28r_Ke5aymalLEk3gchlCaVJ7jxdW2t0q0dIF4H11lg/viewform?usp=send_form"><button type="button">Apply as a Brand</button></a>
          </li>
          <li className={styles.social}>
            <div className={styles.icon} onClick={() =>
                      window.open("https://x.com/ECCOCert", "_blank")
                    }>
              <img src={twitter} alt="Twitter" />
            </div>
            <div className={styles.icon} onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/ecco-certified/",
                        "_blank"
                      )
                    }>
              <img src={link} alt="LinkedIn" />
            </div>
            <div className={styles.icon} onClick={() =>
                      window.open(
                        "https://www.instagram.com/ecco_cert/",
                        "_blank"
                      )
                    }>
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
