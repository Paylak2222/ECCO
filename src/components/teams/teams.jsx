import style from "./teams.module.css";

export default function Teams({ data }) {
  return (
    <>
      <div className={style.teams__title}>
        <h4>Teams</h4>
      </div>
      <div className={style.teams__flex}>
        {data.map((item, index) => (
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
  );
}
