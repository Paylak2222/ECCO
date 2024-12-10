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
      title: "PRELIMINARY ENROLLMENT",
      name: "Step 1",
      description:
        "Brands submit a form to determine their initial and monthly dues for ECCO certification, which covers product assessments and marketing support withi the ECCO-System.",
      image: Step,
    },
    {
      title: "INITIAL SCREENING",
      name: "Step 2",
      description:
        "ECCO schedules a call with the brand to discuss the evaluation start date, onboarding fee, and monthly dues and desired products for certification.",
      image: Step1,
    },
    {
      title: "TESTING & EVALUATION*",
      name: "Step 3",
      description:
        "ECCO purchases two product SKUs from a retailer, sends them for third-party lab testing, and reviews results within seven days to determine if they meet certification standards.",
      image: Step2,
    },
    {
      title: "COMPLIANCE MONITORING",
      name: "Step 4",
      description:
        "Two products are tested monthly to ensure continued compliance, with brands undergoing an annual review and re-certification 30 days before their certification expires.",
      image: Step3,
    },
    {
      title: "CERTIFICATION MARK ",
      name: "Step 5",
      description:
        "Certified brands can display the ECCO mark on products that meet Certification Standards, with the results published and integrated into ECCO’s consumer and retail marketing strategies",
      image: Step4,
    },
    {
      title: "CERTIFICATION DECISION",
      name: "Step 6",
      description:
        "Products that pass are awarded the ECCO Certification, allowing the brand to use the ECCO mark for 12 months, with certification results published online for transparency.",
      image: Step5,
    },
    {
      title: "ANNUAL RE-CERTIFICATION",
      name: "Step 7",
      description:
        "Brands receive a re-enrollment form 30 days before their certification expires to determine monthly dues for the next 12 months and to issue a new certificate for continued enrollment",
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
              <img src={step.image} />
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
