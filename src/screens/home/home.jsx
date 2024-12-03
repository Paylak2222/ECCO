import AboutSEction from "../../components/aboutSection/aboutSection";
import EducationSection from "../../components/educationSection/educationSection";
import Header from "../../components/header/Header";
import style from "./home.module.css";

export default function Home() {
  return (
    <div className={style.main}>
      <header>
        <Header />
      </header>
      <section className={style.section__one}>
        <AboutSEction />
      </section>
      <section className={style.section__two}></section>
      <section className={style.section__three}>
        <EducationSection />
      </section>
      <section className={style.section__four}> </section>
    </div>
  );
}
