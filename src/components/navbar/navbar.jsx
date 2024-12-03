import React, { useState } from "react";
import styles from "./navbar.module.css";
import LogoEcco from "../logoEcco/logoEcco";
import Menu from "../menu/menu";

const Navbar = () => {

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
