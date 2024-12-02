import React from 'react'
import Navbar from '../../components/navbar/navbar'
import SectionOne from '../../components/section_one/section_one'
import EccoTeam from '../../components/eccoTeam/eccoTeam'
import Pagination from '../../components/pagination/pagination'
import styles from "./eccoExplore.module.css"
import brandIcon1 from "../../assets/images/image-Resources-pdf/pdf-svgrepo.png"
import brandIcon2 from "../../assets/images/image-Resources-pdf/pdf-svgrepo2.png"
import brandIcon3 from "../../assets/images/image-Resources-pdf/pdf-svgrepo3.png"
import brandIcon4 from "../../assets/images/image-Resources-pdf/pdf-svgrepo3.png"
import brandFil1 from "../../assets/images/image-Resources-pdf/pdf.png"
import brandFil2 from "../../assets/images/image-Resources-pdf/pdf.png"
import brandFil3 from "../../assets/images/image-Resources-pdf/googleForm.png"
import brandFil4 from "../../assets/images/image-Resources-pdf/googleForm.png"
export default function EccoExplore() {
  const data = [
    {
      name: "Standards",
      desc: "ECCO Technical Certification Standards - Pesticides Panel 2025",
      icon: brandIcon1,
      file: "PDF File",
      fileIcon : brandFil1,
    },
    {
      name: "Manual",
      desc: "Coming soon...",
      icon: brandIcon2,
      file: "PDF File",
      fileIcon: brandFil2,
    },
    {
      name: "Brand Intake Form",
      desc: "Thank you for your interest in becoming ECCO Certified!",
      icon: brandIcon3,
      file: "PDF File",
      fileIcon: brandFil3,
    },
    {
      name: "Brand Intake Form",
      desc: "Coming soon...",
      icon: brandIcon4,
      file: "PDF File",
      fileIcon: brandFil4,
    },
  ];
  return (
    <div className='container'>
      <div className={styles.ecoNav}>
        <Navbar/>
      </div>
      <div className={styles.ecoSection}>
        <SectionOne/>
      </div>
      <div className={styles.ecoTeam}>
        <EccoTeam/>
      </div>
        <Pagination title={"Resources"} data={data}/>
    </div>
  )
}
