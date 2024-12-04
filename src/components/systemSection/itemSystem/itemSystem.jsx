import { useState } from "react";
import whitebal from "../../../assets/images/whitebal.png"
import style from "./item.module.css"

export default function ItemSystem(props) {
    const [imgSrc, setImgSrc] = useState(props.img);

    const handleMouseEnter = () => {
        setImgSrc(whitebal); 
      };
      const handleMouseLeave = () => {
        setImgSrc(props.img);
      };

  return (
    <div
    className={style.item}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <img src={imgSrc} alt="Item" />
  </div>
  );
}
