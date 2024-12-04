import React, { useState } from "react";
import styles from "./navbar.module.css";
import LogoEcco from "../logoEcco/logoEcco";
import Menu from "../menu/menu";

const Navbar = () => {

  return (
    <nav className={styles.navbar}>
      <div className={styles.hidMobile}><LogoEcco /></div>
      <Menu />
    </nav>
  );
};

export default Navbar;
