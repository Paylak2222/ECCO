import React, { useState, useEffect } from 'react';
import box from "../../assets/images/box.png";
import briefcase from "../../assets/images/briefcase.png";
import purplebal from "../../assets/images/purplebal.png";
import aquabal from "../../assets/images/aquabal.png";
import yellowbal from "../../assets/images/yellowbal.png";
import bluebal from "../../assets/images/bluebal.png";
import pinkbal from "../../assets/images/pinkbal.png";
import greenbal from "../../assets/images/greenbal.png";
import redbal from "../../assets/images/redbal.png";
import activebox from "../../assets/images/activebox.png";
import activecase from "../../assets/images/activecase.png";
import ItemSystem from "./itemSystem/itemSystem";
import style from "./systemSection.module.css";

const items = [
  purplebal, aquabal, yellowbal, bluebal, yellowbal, pinkbal, purplebal, greenbal, purplebal,
  aquabal, yellowbal, bluebal, greenbal, redbal, purplebal, yellowbal, pinkbal, bluebal, aquabal,
  greenbal, yellowbal, purplebal, redbal, bluebal, pinkbal, greenbal
];

export default function SystemSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9); 
  const [selectedButton, setSelectedButton] = useState('');

  const handleClick = (button) => {
    setSelectedButton(button);
  };
  
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 560) {
        setItemsPerPage(4); 
      } else {
        setItemsPerPage(9); 
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container">
      <section className={style.system__section}>
        <div className={style.wrapper}>
          <span className={style.title}>ECCOsystem</span>
          <div className={style.retailers}>
      <div
        className={`${style.first_but} ${selectedButton === 'retailers' ? style.active : ''}`}
        onClick={() => handleClick('retailers')}
      >
        <img src={selectedButton === 'retailers' ? box : activebox} alt="Retailers" />
        <span>Retailers</span>
      </div>
      <div
        className={`${style.first_but} ${style.second_but} ${selectedButton === 'brands' ? style.active : ''}`}
        onClick={() => handleClick('brands')}
      >
        <img src={selectedButton === 'brands' ? activecase : briefcase} alt="Brands" />
        <span>Brands</span>
      </div>
    </div>
          <span className={style.description}>
            Retailers with ECCO-certified brands, educating staff and customers on safety and quality standards.
          </span>
          <div className={style.block__btn}>
            <button>Apply</button>
          </div>
        </div>
        <div className={style.slide}>
          <div className={style.slider}>
            {currentItems.map((img, index) => (
              <ItemSystem key={index} img={img} />
            ))}
          </div>
          <div className={style.numbers}>
            <div
              className={`${style.left__arrow} ${
                currentPage === 1 ? style.disabled : ""
              }`}
              onClick={goToPreviousPage}
            ></div>
            <span className={style.cur_span}>
              {currentPage}/<sub>{totalPages}</sub>
            </span>
            <div
              className={`${style.right__arrow} ${
                currentPage === totalPages ? style.disabled : ""
              }`}
              onClick={goToNextPage}
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
}
