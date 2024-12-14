import style from "./touchSection.module.css";

export default function TouchSection() {
  return (
    <div className={style.main}>
      <div className="container">
        <section className={style.touch__section}>
          <div className={style.content}>
            <h1>Want to get in touch?</h1>
            <span>
              We envision a world where cannabis benefits both people and the
              planet. We rely on the support and participation of all
              stakeholders. Interested in getting involved? Email us at{" "}
              <span className={style.under}>info@eccocert.org</span> and sign up
              for our mailing list to stay informed.
            </span>
          </div>
          <a href="mailto:info@eccocert.org" ><div className={style.block__btn}>
              <button>info@eccocert.org</button>
            </div></a>
        </section>
      </div>
    </div>
  );
}
