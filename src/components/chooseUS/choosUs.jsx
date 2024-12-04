import React from "react";
import styles from "./chooseUs.module.css";
import eccoImg from  '../../assets/images/Ecco.png'
import like from '../../assets/images/likegreen2.png'
import dislike from '../../assets/images/dislike.png'
import { useState } from 'react';

export default function ChooseUs() {
  const dataLike = [
    {
      description:
        "Tested for 106 harmful pesticides / Passed as non-detectable.",
      icon: like,
    },
    {
      description: "Results publicly disclosed on ECCO's website",
      icon: like,
    },
    {
      description: "Products guaranteed contaminant-free",
      icon: like,
    },
    {
      description:
        "Certification promotes environmentally responsible practices",
      icon: like,
    },
    {
      description: "Monthly audits & continuous compliance monitoring",
      icon: like,
    },
  ];
  const dataDislike = [
    {
      description:
        "Tested for 106 harmful pesticides / Passed as non-detectable.",
      icon: dislike,
    },
    {
      description:
        "Results publicly disclosed on ECCO's website",
      icon: dislike,
    },
    {
      description:
        "Products guaranteed contaminant-free",
      icon: dislike,
    },
    {
        description:
          "Certification promotes environmentally responsible practices",
        icon: dislike,
      },
      {
        description:
          "Monthly audits & continuous compliance monitoring",
        icon: dislike,
      },
  ];

      const [currentPage, setCurrentPage] = useState(1);
      const totalPages = 2;
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
    <div>
        <div className={styles.title_container}>
            <span className={styles.title}>
                Why choose us
            </span>
            <span className={styles.description}>
                Our Standards
            </span>
        </div>
        <div className={styles.numbers}>
          <div
            className={`${styles.left__arrow} ${
              currentPage === 1 ? styles.disabled : ""
            }`}
            onClick={handlePrevPage}
          ></div>
          <span>
            {currentPage}/<sub>{totalPages}</sub>
          </span>
          <div
            className={`${styles.right__arrow} ${
              currentPage === totalPages ? styles.disabled : ""
            }`}
            onClick={handleNextPage}
          ></div>
        </div>
        <div className={styles.cards}>
            {currentPage===1 && <div className={styles.cards_left}>
               <div className={styles.cards_heading}>
                <img className={styles.eccoImage} src={eccoImg} alt='Ecco Logo' />
                <div className={styles.text_container}>
                    <span className={styles.cards_head}>ECCO</span>
                    <span className={styles.cards_descriptionn}>This is what brands with ECCO Certification provide</span>
                </div>
               </div>
               <div className={styles.items_container}>
                    {dataLike && dataLike.map((item,index)=>{
                        return(
                            <div className={styles.img_description}>
                                <img className={styles.like} src={item.icon} alt='Ecco Logo' />
                                <div key={index} className={styles.items}>{item.description}</div>
                            </div>
                        )
                    })}
                </div>
            </div>}
            {currentPage===2 && <div className={styles.cards_right}>
            <div className={styles.cards_left}>
               <div className={styles.cards_heading}>
                <div className={styles.text_container_right}>
                    <span className={styles.cards_head}>Others</span>
                    <span className={styles.cards_descriptionn}>Unsafe brands without certification</span>
                </div>
               </div>
               <div className={styles.items_container}>
                    {dataDislike && dataDislike.map((item,index)=>{
                        return(
                            <div className={styles.img_description}>
                                <img className={styles.like} src={item.icon} alt='Ecco Logo' />
                                <div key={index} className={styles.items}>{item.description}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            </div>}
        </div>
      </div>
  );
}
