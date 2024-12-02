import Item from "../item/Item";
import style from "./header.module.css";
import share from "../../assets/images/share.png"

export default function Header() {
  return (
    <div className={style.main}>
      <div className={style.heading}>
        <div className={style.logo}> </div>
        <div className={style.head}>
            <span>Certifying Goods for Consumer <span className={style.green_sp}>Safety</span></span>
        </div>
        <div className={style.desc}>
           <span>ECCO-certified brands and retailers commit to higher standards of consumer safety, product quality, and environmental responsibility.</span>
        </div>
        <div className={style.items}>
           <Item icon={share} text="Ethical compliance"/>
        </div>        
      </div>
    </div>
  );
}
