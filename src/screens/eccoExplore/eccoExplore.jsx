import React from "react";
import Navbar from "../../components/navbar/navbar";
import SectionOne from "../../components/section_one/section_one";
import EccoTeam from "../../components/eccoTeam/eccoTeam";
import Pagination from "../../components/pagination/pagination";
import styles from "./eccoExplore.module.css";
import brandIcon1 from "../../assets/images/image-Resources-pdf/pdf-svgrepo.png";
import brandIcon2 from "../../assets/images/image-Resources-pdf/pdf-svgrepo2.png";
import brandIcon3 from "../../assets/images/image-Resources-pdf/pdf-svgrepo3.png";
import brandIcon4 from "../../assets/images/image-Resources-pdf/pdf-svgrepo4.png";
import brandFil1 from "../../assets/images/image-Resources-pdf/pdf.png";
import brandFil2 from "../../assets/images/image-Resources-pdf/pdf.png";
import brandFil3 from "../../assets/images/image-Resources-pdf/googleForm.png";
import brandFil4 from "../../assets/images/image-Resources-pdf/googleForm.png";
import mattersImg1 from "../../assets/images/Rectangle.png";
import mattersImg2 from "../../assets/images/Rectangle2.png";
import mattersImg3 from "../../assets/images/Rectangle3.png";
import heartIcon from "../../assets/images/heart.png";
import bookSavedIcon from "../../assets/images/book-saved.png";
import starsIcon from "../../assets/images/stars.png";
import ChooseUs from "../../components/chooseUS/choosUs";
import QuestionSection from "../../components/questions/Questions";
import EducationSection from "../../components/educationSection/educationSection";
import Footer from "../../components/footer/Footer";

export default function EccoExplore() {
  const resourcesData = [
    {
      type: "resources",
      name: "Overview",
      desc: "ECCO Technical Certification Standards - Pesticides Panel 2025",
      icon: brandIcon1,
      file: "PDF File",
      fileIcon: brandFil1,
    },
    {
      type: "resources",
      name: "Manual",
      desc: "Coming soon...",
      icon: brandIcon2,
      file: "PDF File",
      fileIcon: brandFil2,
    },
    {
      type: "resources",
      name: "Certification Standards",
      desc: "Thank you for your interest in becoming ECCO Certified!",
      icon: brandIcon3,
      file: "PDF File",
      fileIcon: brandFil3,
    },
    {
      type: "resources",
      name: "Deck",
      desc: "Coming soon...",
      icon: brandIcon4,
      file: "PDF File",
      fileIcon: brandFil4,
    },
  ];

  const mattersData = [
    {
      type: "matters",
      name: "Enhanced consumer trust",
      desc: "The ECCO Certification mark signifies that the product has undergone rigorous testing, surpassing regulatory compliance, and assures consumers of the products’ quality.",
      icon: heartIcon,
      image: mattersImg1,
    },
    {
      type: "matters",
      name: "Enhanced retail exposure",
      desc: "ECCO Certification can lead to preferred treatment in retail settings within the ECCO preferred retail partner system.",
      icon: bookSavedIcon,
      image: mattersImg2,
    },
    {
      type: "matters",
      name: "Consumer Engagement",
      desc: "ECCO’s consumer education and retail staff appreciation initiatives, allow brands to engage directly with health - conscious consumers and industry tastemakers.",
      icon: starsIcon,
      image: mattersImg3,
    },
    {
      type: "matters",
      name: "Enhanced consumer trust",
      desc: "The ECCO Certification mark signifies that the product has undergone rigorous testing, surpassing regulatory compliance, and assures consumers of the products’ quality.",
      icon: heartIcon,
      image: mattersImg1,
    },
    {
      type: "matters",
      name: "Consumer Engagement",
      desc: "ECCO’s consumer education and retail staff appreciation initiatives, allow brands to engage directly with health - conscious consumers and industry tastemakers.",
      icon: starsIcon,
      image: mattersImg3,
    },
  ];
  return (
    <div className="container">
      <div className={styles.ecoNav}>
        <Navbar />
      </div>
      <div className={styles.ecoSection}>
        <SectionOne />
      </div>
      <div className={styles.ecoTeam}>
        <EccoTeam />
      </div>
      <Pagination title={"Resources"} data={resourcesData} />
      <ChooseUs />
      <section className={styles.section__six}>
        <EducationSection />
      </section>
      <Pagination title={"Why it matters"} data={mattersData} />
      <section className={styles.section__five}>
        <QuestionSection />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
