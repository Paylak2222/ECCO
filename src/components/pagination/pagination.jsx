import { useState } from "react";
import PaginationBlock from "../paginationBlock/paginationBlock";
import style from "./pagination.module.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function Pagination({ title, data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const { width } = useWindowDimensions();

  const itemsPerPage = width<560?1:3;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <div className={style.pagination__title}>
        <span>{title}</span>
        <div className={style.numbers}>
          <div
            className={`${style.left__arrow} ${
              currentPage === 1 ? style.disabled : ""
            }`}
            onClick={handlePrevPage}
          ></div>
          <span>
            {currentPage}/<sub>{totalPages}</sub>
          </span>
          <div
            className={`${style.right__arrow} ${
              currentPage === totalPages ? style.disabled : ""
            }`}
            onClick={handleNextPage}
          ></div>
        </div>
      </div>
      <div className={style.pagination}>
        {currentItems.map((item, index) => (
          <PaginationBlock
            key={index}
            name={item.name}
            desc={item.desc}
            icon={item.icon}
            file={item.file}
            fileIcon={item.fileIcon}
          />
        ))}
      </div>
    </>
  );
}
