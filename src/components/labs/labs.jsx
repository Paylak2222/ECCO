import style from "../teams/teams.module.css";
import styleLabs from "./labs.module.css";
export default function Labs({ data }) {
  return (
    <>
      <div className={style.teams__title}>
        <h4>Labs</h4>
      </div>
      <div className={style.teams__flex}>
        {data.map((item, index) => (
          <div key={index} className={style.teams__block}>
            <div className={styleLabs.profilImg__labs}>
              <img
                src={item.profilLogo || "/default-image.png"}
                alt={`${item.name || "No Name"}'s profile`}
              />
            </div>
            <div className={style.profil__name}>
              <p>{item.name || "No Name"}</p>
            </div>
            <div className={style.profil__desc}>
              <p>{item.desc || "No Description"}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
