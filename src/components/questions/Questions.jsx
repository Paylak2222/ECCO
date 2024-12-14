import Question from "./Question/Question";
import style from "./Questions.module.css";
import Image1 from "../../assets/images/questions-images/1.png";
import Image2 from "../../assets/images/questions-images/2.png";
import Image3 from "../../assets/images/questions-images/3.png";
import Image4 from "../../assets/images/questions-images/4.png";

const questions = [
  {
    question: "What is ECCO?",
    answer:
      "ECCO is a non-profit organization that provides a certification program for cannabis brands that are committed to using sustainable and regenerative practices. ECCO is dedicated to promoting the highest standards of environmental and social responsibility in the cannabis industry.",
  },
  {
    question: "What are the benefits of becoming ECCO certified?",
    answer:
      "ECCO certification provides cannabis brands with a competitive advantage by demonstrating their commitment to sustainability and social responsibility. ECCO certified brands are recognized for their environmental stewardship and ethical business practices, which can help attract environmentally conscious consumers and investors.",
  },
  {
    question: "How can I become ECCO certified?",
    answer:
      "To become ECCO certified, cannabis brands must meet the organization's rigorous standards for sustainable and regenerative practices. Brands must undergo a thorough assessment of their operations and supply chain to ensure compliance with ECCO's certification requirements. Once certified, brands can display the ECCO seal on their products to showcase their commitment to sustainability.",
  },
  {
    question: "How can I learn more about ECCO certification?",
    answer:
      `To learn more about ECCO certification and how your cannabis brand can become certified, please contact us at: <a href="mailto:info@eccocert.org">info@eccocert.org</a>`,
  }
];

const QuestionSection = () => {
  return (
    <div >
      <div className={style.wrapper}>
        <span className={style.title}>Questions you may have</span>
        <div className={style.content}>
          <div className={style.leftSide}>
            <div className={style.row}>
              <div className={style.col}>
                <img src={Image1} className={style.image1} />
              </div>
              <div className={style.col}>
                <img src={Image2} className={style.image2} />
              </div>
            </div>
            <div className={`${style.row} ${style.hideMobile}`}>
              <div className={style.col}>
                <img src={Image3} />
              </div>
              <div className={style.col}>
                <img src={Image4} />
              </div>
            </div>
          </div>
          <div className={style.rightSide}>
            {questions.map((item, index) => (
              <Question
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
          <div className={`${style.leftSide} ${style.leftSide__modile}`}>
            <div className={`${style.row} ${style.showMobile}`}>
              <div className={style.col}>
                <img src={Image3} />
              </div>
              <div className={style.col}>
                <img src={Image4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuestionSection;
