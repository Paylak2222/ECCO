import booksaved from "../../assets/images/booksaved.png"
import style from "./educationSection.module.css"

export default function EducationSection() {
    return (
        <div className="container">
          <section className={style.education_section}>
            <div className={style.content}>
               <div className={style.retailers}>
                  <img src={booksaved} alt="Book saved" /> <span>Education Hub</span>
               </div>
               <h3>
                 What Every Stakeholder Needs to Know
               </h3>
               <span>
                Education is central to ECCO’s mission.<br/>  We’ve compiled a living resource that both educates and shares recent news and key takeaways.
               </span>
               <div className={style.block__btn}>
                 <button>More Info</button>
               </div>
               <div className={style.img__div}>
                
               </div>
            </div>
          </section>
        </div>
    );
    }