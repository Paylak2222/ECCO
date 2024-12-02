import Pagination from "../../components/pagination/pagination";
import style from "./eccoSystem.module.css";
import brandIcon from "../../assets/images/Balancer.png";
import brandIcon2 from "../../assets/images/Balancer2.png";
import brandIcon3 from "../../assets/images/Balancer3.png";
import informationImage from "../../assets/images/informationImage.png";
import eccoImage from "../../assets/images/ECCOimage.png";
import bookSaved from "../../assets/images/booksaved.png";

const data = [
  {
    name: "Brand Name",
    desc: "Brand Description",
    icon: brandIcon,
  },
  {
    name: "Brand Name",
    desc: "Brand Description",
    icon: brandIcon3,
  },
  {
    name: "Brand Name",
    desc: "Brand Description",
    icon: brandIcon2,
  },
  {
    name: "Brand Name",
    desc: "Brand Description",
    icon: brandIcon,
    file: "PDF File",
  },
];
export default function EccoSystem() {
  return (
    <div className={style.main}>
      <div className="container">
        <header>
          <div className="menu"></div>
          <div className={style.content}>
            <div className={style.text}>
              <h1>ECCOsystem</h1>
              <p>
                Choose ECCO certified brands for unmatched quality, backed by
                science, and trusted for safety.
              </p>
            </div>
            <div className={style.buttons}>
              <button>Brands</button>
              <button>Retailers</button>
              <button>Labs</button>
            </div>
          </div>
        </header>
        <section class={style.section__one}>
          <div className={style.pagination__block}>
            <Pagination title={"Brands"} data={data} />
          </div>
        </section>
        <section class={style.section__two}>
          <div className={style.information}>
            <div className={style.information__image}>
              <img src={informationImage} alt="ECCO Cat 4 Certified" />
              <img src={eccoImage} alt="ECCO Cat 4 Certified" />
            </div>
            <div className={style.information__text}>
              <h3>Interested in becoming a retailer? </h3>
              <p>
                Join the ECCOsystem and become part of the future of responsible
                retail. Your participation ensures your products meet rigorous
                safety standards, fostering trust with consumers and reinforcing
                your dedication to their well-being.
              </p>
            </div>
          </div>
        </section>
        <section className={style.section__three}>
          <div className={style.content}>
            {/* <div className={style.retailers}>
              <img src={bookSaved} alt="retailers" /> <span>Retailers</span>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}
