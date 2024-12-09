import style from "./paginationBlock.module.css";
export default function PaginationBlock({
  icon,
  name,
  desc,
  file,
  fileIcon,
  link,
}) {
  return (
    <div className={style.page__block}>
      <div className={style.block__image}>
        <img src={icon} alt="Brand Logo" />
      </div>
      <div className={style.content}>
        <div className={style.block__name}>
          <span>{name}</span>
        </div>
        {file && (
          <div className={style.block__file}>
            <button>
              <img src={fileIcon} alt="PDF icon" />
              <span>{file}</span>
            </button>
          </div>
        )}
        <div className={style.block__desc}>
          <span>{desc}</span>
        </div>
        <div className={style.block__btn}>
          <button onClick={() => window.open(link, "_blank")}>
            Visit Website
          </button>
        </div>
      </div>
    </div>
  );
}
