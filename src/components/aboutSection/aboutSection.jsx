import pict_1 from "../../assets/images/pict_1.png"
import pict_2 from "../../assets/images/pict_2.png"
import pict_3 from "../../assets/images/pict_3.png"
import pict_4 from "../../assets/images/pict_4.png"
import emoji from "../../assets/images/emoji-happy.png"
import style from "./aboutSection.module.css"

export default function AboutSEction() {
    return (
        <div className="container">
          <section className={style.about_section}>
            <div className={style.about_div}>
                <div className={style.picture} >
                    <img src={pict_1} alt="" width="199" height="248"/>
                </div>
                <div className={style.picture_2} >
                    <img src={pict_2} alt="" width="285" height="355"/>
                </div>
            </div>
            <div className={style.sec_about}>
            <div className={style.retailers}>
              <img src={emoji} alt="Book saved" /> <span>Main-About Us</span>
            </div>
            <h3>
               Environmental & Consumer Compliance Organization
            </h3>
            <span>
            ECCO is a nonprofit, voluntary certification for cannabis products.  We test our member products for over 100+ contaminants and evaluate and raise environmental and ethical standards in consumer cannabis.
            </span>
            </div>
            <div className={style.about_div}>
            <div className={style.third_picture} >
                    <img src={pict_3} alt="" width="189" height="237"/>
                </div>
                <div className={style.picture_2} >
                    <img src={pict_4} alt="" width="260" height="323"/>
                </div>
            </div>
          </section>
        </div>
        );
    }