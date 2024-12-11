import { useMemo } from "react";
import style from "./teams.module.css";

export default function Teams({ data }) {
  const parts = useMemo(() => {
    const tmp = data.reduce(
      (acc, item) => {
        if (!acc[item.type]) {
          acc[item.type] = [];
        }
        acc[item.type].push(item);
        return acc;
      },
      {}
    );
    return Object.keys(tmp).map(key => ({ type: key, data: tmp[key] }));
  }, [data]);  
  return parts.map((part) => {
    return (
      <>
        <div className={style.teams__title}>
          <h4>{part.type}</h4>
        </div>
        <div className={style.teams__flex}>
          {part.data.map((item, index) => (
            <div key={index} className={style.teams__block}>
              <div className={style.profilImg}>
                <img
                  src={item.profilImg || "/default-image.png"}
                  alt={`${item.name || "No Name"}'s profile`}
                />
              </div>
              <div className={style.profil__name}>
                <p>{item.name || "No Name"}</p>
              </div>
              <div className={style.profil__desc}>
                <p>{item.desc || "No Description"}</p>
              </div>
              <div className={style.profil__logo}>
                {item.profilLogo ? (
                  <img
                    src={item.profilLogo}
                    alt={`${item.name || "No Name"}'s logo`}
                  />
                ) : (
                  <span>No Logo</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </>
    )
  });
}
