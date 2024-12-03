import Navbar from "../../components/navbar/navbar";
import Pagination from "../../components/pagination/pagination";
import Footer from "../../components/footer/Footer";
import style from "./eccoSystem.module.css";
import brandIcon from "../../assets/images/Balancer.png";
import brandIcon2 from "../../assets/images/Balancer2.png";
import brandIcon3 from "../../assets/images/Balancer3.png";
import brandIcon4 from "../../assets/images/pdficon.png";
import informationImage from "../../assets/images/informationImage.png";
import eccoImage from "../../assets/images/ECCOimage.png";
import bookSaved from "../../assets/images/booksaved.png";
import Image1 from "../../assets/images/image-in-text/1.png";
import Image2 from "../../assets/images/image-in-text/2.png";
import Image3 from "../../assets/images/image-in-text/3.png";
import Image4 from "../../assets/images/image-in-text/4.png";
import Image5 from "../../assets/images/image-in-text/5.png";

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
    fileIcon: brandIcon4,
  },
];
export default function EccoSystem() {
  return (
    <div className={style.main}>
      <div className="container">
        <header>
          <div className="menu">
            <Navbar />
          </div>
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
          <div className={style.content__retailers}>
            <div className={style.retailers}>
              <img src={bookSaved} alt="Book saved" /> <span>Retailers</span>
            </div>
            <div className={style.textWithImg}>
              <span>
                Cultivators
                <img src={Image1} height="46" width="74" />
                ,Consumers
                <img src={Image2} height="46" width="74" />
                ,Retailers
              </span>
              <span>
                Food safety experts
                <img src={Image3} height="46" width="74" />
                ,Doctors,Brands
              </span>
              <span>
                Public officials
                <img src={Image4} height="46" width="74" /> and labs
              </span>
              <span>
                Help shape
                <img src={Image5} height="46" width="74" /> ECCO’s mission and
                discover how you can make a meaningful impact today
              </span>
            </div>
            <div className={style.inviteText}>
              <span>
                We invite you to join a community dedicated to consumer safety
                and environmental responsibility
              </span>
            </div>
            <div className={style.textWithImg}>
              <span>Please send your message to</span>
            </div>
            <div className={style.block__btn}>
              <button>Info@ECCOcert.org</button>
            </div>
          </div>
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
