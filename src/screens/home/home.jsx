import AboutSection from "../../components/aboutSection/aboutSection";
import EducationSection from "../../components/educationSection/educationSection";
import Header from "../../components/header/Header";
import Pagination from "../../components/pagination/pagination";
import SectionOne from "../../components/section_one/section_one";
import style from "./home.module.css";
import brandIcon1 from "../../assets/images/image-Resources-pdf/pdf-svgrepo.png";
import brandIcon2 from "../../assets/images/image-Resources-pdf/pdf-svgrepo2.png";
import brandIcon3 from "../../assets/images/image-Resources-pdf/pdf-svgrepo3.png";
import brandIcon4 from "../../assets/images/image-Resources-pdf/pdf-svgrepo4.png";
import brandFil1 from "../../assets/images/image-Resources-pdf/pdf.png";
import brandFil2 from "../../assets/images/image-Resources-pdf/pdf.png";
import brandFil3 from "../../assets/images/image-Resources-pdf/googleForm.png";
import brandFil4 from "../../assets/images/image-Resources-pdf/googleForm.png";
import EccoTeam from "../../components/eccoTeam/eccoTeam";
import TouchSection from "../../components/touchSection/touchSection";
import QuestionSection from "../../components/questions/Questions";
import SystemSection from "../../components/systemSection/systemSection";
import Footer from "../../components/footer/Footer";

const data = [
  {
    type: "resources",
    name: "Overview",
    desc: "ECCO Technical Certification Standards - Pesticides Panel 2025",
    icon: brandIcon1,
    file: "ECCO Overview",
    fileIcon: brandFil1,
    link: "https://docs.google.com/document/d/1Npz7QUUjnStWYBT0hvBe8d2ysTrwir4eKzv1hSg2HJM/edit?usp=sharing",
  },
  {
    type: "resources",
    name: "Manual",
    desc: "Coming soon...",
    icon: brandIcon2,
    file: "ECCO Manual",
    fileIcon: brandFil2,
    link: "https://docs.google.com/document/d/19rtNl41csjsiHQkTDRxm0IO7Cx5SVnqnM4n5E9nt0WI/edit?usp=sharing",
  },
  {
    type: "resources",
    name: "Certification Standards",
    desc: "Thank you for your interest in becoming ECCO Certified!",
    icon: brandIcon3,
    file: "ECCO Brand",
    fileIcon: brandFil3,
    link: "https://docs.google.com/document/d/1R_3YVtNdOrHnUAM2DCO7e_SZTigSD8cn/edit?usp=sharing&ouid=113439082160299838218&rtpof=true&sd=true",
  },
  {
    type: "resources",
    name: "Deck",
    desc: "Coming soon...",
    icon: brandIcon4,
    file: "PDF File",
    fileIcon: brandFil4,
    link: "https://www.canva.com/design/DAGRnI6g0s4/3WQEbUP2G91zH4I5nlw9_A/view",
  },
];

export default function Home() {
  return (
    <div className={style.main}>
      <header>
        <Header />
      </header>
      <section className={style.section__one}>
        <AboutSection />
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
      <section className={style.section__five}>
        <div className="container">
          <QuestionSection />
        </div>
      </section>
      {/* <section className={style.section__six}>
        <SystemSection />
      </section> */}
      <section className={style.section__seven}>
        <EccoTeam />
      </section>
      <section className={style.section__eight}>
        <TouchSection />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
