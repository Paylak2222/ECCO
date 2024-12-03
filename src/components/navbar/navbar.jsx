import React, { useState } from "react";
import styles from "./navbar.module.css";
import LogoEcco from "../logoEcco/logoEcco";
import Menu from "../menu/menu";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isEccoSystemOpen, setEccoSystemOpen] = useState(false);
  const [isEccoSystemtowOpen, setEccoSystemtowOpen] = useState(false);

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

  return (
    <div className="container">
      <nav className={styles.navbar}>
        <LogoEcco />
        <Menu />
      </nav>
    </div>
  );
};

export default Navbar;
