import style from "./item.module.css"

export default function Item(props) {
  return (
    <div className={style.item}>
      <div className={style.img}>
        <img src={props.icon} alt="" />
      </div>
      <span>{props.text}</span>
    </div>
  );
}
