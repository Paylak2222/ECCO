import style from "./matters.module.css";

export default function Matters({ icon, name, desc, image }) {
  return (
    <div className={style.matters}>
      <div className={style.matters__title}>
        <img src={icon} alt={name} />
        <span>{name}</span>
      </div>
      <div className={style.matters__desc}>
        <p>{desc}</p>
      </div>
      <div className={style.matters__image}>
        <img src={image} alt={name} />
      </div>
    </div>
  );
}
