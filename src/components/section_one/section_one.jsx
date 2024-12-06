import React from 'react';
import styles from './section_one.module.css';
import Steps from './steps/steps';
import redFlag from '../../assets/images/red-flag.svg';
import Like from '../../assets/images/like.svg';
const SectionOne = () => {
    return (
    <div className='container'>
        <div className={styles.sections}>
                <div className={styles.sectionsContainer}>
                    <div className={styles.sectionOne}>
                            <div className={styles.icon}><img src={redFlag} />
                                <h2 className={styles.title}>The Problem:</h2>
                            </div>
                                <p className={styles.descriptionOne}>
                                    Consumers are left in the dark about many contaminants found in cannabis. The current standards for cannabis safety are often not met or are inconsistent.
                                </p>
                    </div>
                    <div className={styles.sectionTwo}>
                        <div className={styles.icon}><img src={Like} />
                            <h2 className={styles.title}>A Solution:</h2>
                        </div>
                            <p className={styles.descriptionTwo}>
                                ECCO offers independent, third-party testing and certification to determine compliance and adherence to our safety, quality, and environmental standards. Our brands carry the ECCO mark at retail, allowing customers to make clear choices that benefit their personal health and safety.
                            </p>
                    </div>
                </div>
            <div className={styles.stepsSection}>
                <Steps/>
            </div>
        </div>
    </div>
  );
};

export default SectionOne;
