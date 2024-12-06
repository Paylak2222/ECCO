import React from "react";
import { Link } from "react-router-dom";
import styles from "./logoEcco.module.css";
import EccoLogo from "../../assets/images/eccoLogo.png";

const LogoEcco = () => {
  return (
    <Link to="/">
      <div className={styles.logoEcco}>
        <img src={EccoLogo} alt="Ecco Logo" />
      </div>
    </Link>
  );
};
export default LogoEcco;
