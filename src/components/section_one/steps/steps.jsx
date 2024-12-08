import React, { useState } from "react";
import styles from "./steps.module.css";
import Step from "../../../assets/images/Step.png";
import Step1 from "../../../assets/images/Step1.png";
import Step2 from "../../../assets/images/Step2.png";
import Step3 from "../../../assets/images/Step3.png";
import Step4 from "../../../assets/images/Step4.png";
import Step5 from "../../../assets/images/Step5.png";
import Step6 from "../../../assets/images/Step6.png";

const Steps = () => {
  const [activeStep, setActiveStep] = useState(null); 
  const steps = [
    {
      title: "Preliminary Enrollment",
      name:"Step 1",
      description:
        "Brands submit a form to determine their initial and monthly dues for ECCO certification, which covers product assessments and marketing support within the ECCO-System.",
      image: Step,
    },
    {
      title: "Initial Screening",
      name:"Step 2",
      description:
        "Brands undergo an initial screening process to evaluate eligibility for certification.",
      image: Step1,
    },
    {
      title: "Testing & Evaluation",
      name:"Step 3",
      description:
        "Products are tested and evaluated for safety, quality, and environmental standards.",
      image: Step2,
    },
    {
        title: "Evaluation",
        name:"Step 4",
        description:
          "Products are tested and evaluated for safety, quality, and environmental standards.",
        image: Step3,
      },
      {
        title: "Testing ",
        name:"Step 5",
        description:
          "Products are tested and evaluated for safety, quality, and environmental standards.",
        image: Step4,
      },
      {
        title: "Testing & Evaluation",
        name:"Step 6",
        description:
          "Products are tested and evaluated for safety, quality, and environmental standards.",
        image: Step5,
      },
      {
        title: "Testing & Evaluation",
        name:"Step 7",
        description:
          "Products are tested and evaluated for safety, quality, and environmental standards.",
        image: Step6,
      },
  ];

  const handleStepClick = (index) => {
    setActiveStep(activeStep === index ? null : index); 
  };

  return (
    <div className={styles.container}>
      {steps.map((step, index) => (
         <div key={index} className={styles.stepBlock}>
            <div className={styles.stepBg} onClick={() => handleStepClick(index)}>
              {/* <img src={step.image} alt={step.title} className={styles.stepNumber} /> */}
              <div className={styles.stepNumber}>
                <img src={step.image}/>
                <span>{step.name}</span>
              </div>
              <p className={styles.stepText}>{step.title}</p>
              {activeStep === index && ( 
                <div className={styles.stepDescription}>
                  <p>{step.description}</p>
                </div>
              )}
           </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
