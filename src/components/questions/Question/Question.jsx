import React, { useState } from 'react';
import style from "./Question.module.css";
import ArrowDown from "../../../assets/images/arrow-down.svg";
const Question = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={style.questionItem}>
            <div className={style.questionTitle} onClick={toggleAccordion}>
                <span>{question}</span> <img src={ArrowDown} alt="arrow-down" className={isOpen ? style.arrowDown : style.arrowUp} />
            </div>
            {isOpen && <div className={style.questionAnswer}  dangerouslySetInnerHTML={{__html:answer}} ></div>}
        </div>
    );
};

export default Question;