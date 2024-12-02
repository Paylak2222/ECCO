import React from 'react';
import styles from './logoEcco.module.css';
import EccoLogo from "../../assets/images/eccoLogo.png";

const LogoEcco = () => {
    return (
            <div className={styles.logoEcco}>
                <img src={EccoLogo} alt="Ecco Logo" />
            </div>
    );
}
export default LogoEcco;
