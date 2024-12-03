import AboutSEction from "../../components/aboutSection/aboutSection";
import EducationSection from "../../components/educationSection/educationSection";
import Header from "../../components/header/Header";
import Pagination from "../../components/pagination/pagination";
import SectionOne from "../../components/section_one/section_one";
import style from "./home.module.css";
import brandIcon1 from "../../assets/images/image-Resources-pdf/pdf-svgrepo.png";
import brandIcon2 from "../../assets/images/image-Resources-pdf/pdf-svgrepo2.png";
import brandIcon3 from "../../assets/images/image-Resources-pdf/pdf-svgrepo3.png";
import brandIcon4 from "../../assets/images/image-Resources-pdf/pdf-svgrepo3.png";
import brandFil1 from "../../assets/images/image-Resources-pdf/pdf.png";
import brandFil2 from "../../assets/images/image-Resources-pdf/pdf.png";
import brandFil3 from "../../assets/images/image-Resources-pdf/googleForm.png";
import brandFil4 from "../../assets/images/image-Resources-pdf/googleForm.png";
import EccoTeam from "../../components/eccoTeam/eccoTeam";
import TouchSection from "../../components/touchSection/touchSection";

const data = [
  {
    name: "Standards",
    desc: "ECCO Technical Certification Standards - Pesticides Panel 2025",
    icon: brandIcon1,
    file: "PDF File",
    fileIcon: brandFil1,
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

export default function Home() {
  return (
    <div className={style.main}>
      <header>
        <Header />
      </header>
      <section className={style.section__one}>
        <AboutSEction />
      </section>
      <section className={style.section__two}>
        <SectionOne />
      </section>
      <section className={style.section__three}>
        <EducationSection />
      </section>
      <section className={style.section__four}>
        <div className="container">
          <Pagination title={"Resources"} data={data} />
        </div>
      </section>
      <section className={style.section__five}></section>
      <section className={style.section__six}></section>
      <section className={style.section__seven}>
        <EccoTeam />
      </section>
      <section className={style.section__eight}>
        <TouchSection />
      </section>
    </div>
  );
}
