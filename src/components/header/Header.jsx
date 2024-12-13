import { Link } from "react-router-dom";
import Item from "../item/Item";
import style from "./header.module.css";
import share from "../../assets/images/share.png";
import shield from "../../assets/images/shield.png";
import profile from "../../assets/images/profile.png";
import glass from "../../assets/images/glass.png";
import emoji from "../../assets/images/emoji.png";
import like from "../../assets/images/like.png";
import global from "../../assets/images/global.png";
import Menu from "../menu/menu";

export default function Header() {
  return (
    <div className={style.main}>
      <div className={style.heading}>
        <Link to="/">
          <div className={style.logo}> </div>
        </Link>
        <div className={style.head}>
          <span>
            Certifying Goods for Consumer{" "}
            <span className={style.green_sp}>Safety</span>
          </span>
        </div>
        <div className={style.desc}>
          <span>
            ECCO-certified brands and retailers commit to higher standards of
            consumer safety, product quality, and environmental responsibility.
          </span>
        </div>
        <div className={style.items}>
          <div className={style.itemsContenier}>
          <Item icon={share} text="Ethical compliance" />
          <Item icon={shield} text="Exceeding standards" />
          <Item icon={like} text="Informed choices" />
          <Item icon={profile} text="Accountable brands" />
          <Item icon={global} text="Consumer education" />
          <Item icon={glass} text="Thorough testing" />
          <Item icon={emoji} text="Collaborative engagement" />
          </div>
        </div>
        <div className={style.items}>
        <div className={style.itemsContenier + " "+ style.second}>
          <Item icon={emoji} text="Collaborative engagement" />
          <Item icon={share} text="Ethical compliance" />
          <Item icon={shield} text="Exceeding standards" />
          <Item icon={profile} text="Accountable brands" />
          <Item icon={glass} text="Thorough testing" />
          <Item icon={like} text="Informed choices" />
          <Item icon={global} text="Consumer education" />
          </div>
        </div>
        <div className={style.items}>
        <div className={style.itemsContenier}>
          <Item icon={glass} text="Thorough testing" />
          <Item icon={profile} text="Accountable brands" />
          <Item icon={share} text="Ethical compliance" />
          <Item icon={global} text="Consumer education" />
          <Item icon={like} text="Informed choices" />
          <Item icon={emoji} text="Collaborative engagement" />
          <Item icon={shield} text="Exceeding standards" />
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
}
