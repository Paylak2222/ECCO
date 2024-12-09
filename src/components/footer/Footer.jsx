import { useState } from "react";
import style from "./footer.module.css";
import instagram from "../../assets/images/intsa.png";
import twitter from "../../assets/images/twitter.png";
import link from "../../assets/images/link.png";
import facebook from "../../assets/images/Facebook.png";
import arrow from "../../assets/images/arrow-right.png";

export default function Footer() {
  const [showEccosystemList, setShowEccosystemList] = useState(false);
  const [resourcesList, setResourcesList] = useState(false);
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);

  const handleButtonClick = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  const ecco_click = () => {
    setShowEccosystemList(!showEccosystemList);
    if (resourcesList) {
      setResourcesList(!resourcesList);
    }
  };

  const res_click = () => {
    setResourcesList(!resourcesList);
    if (showEccosystemList) {
      setShowEccosystemList(!showEccosystemList);
    }
  };

  return (
    <div className="container">
      <div className={style.main}>
        <div className={style.logo}></div>
        <div className={style.footer}>
          <div className={style.search}>
            <span>Newsletter</span>
            <div className={style.inp_div}>
              {isError && (
                <label className={style.error_message}>
                  Error: try again later
                </label>
              )}
              <div className={style.but_arr}>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className={isError ? style.error : ""}
                />
                <div onClick={handleButtonClick} className={style.button}></div>
              </div>
            </div>
          </div>
          <div className={style.info}>
            <div className={style.bio}>
              <ul>
                <li className={style.head}>Navigation</li>
                <li>About</li>
                <li>
                  <div className={style.row}>
                    Resources
                    <div className={style.icon}>
                      <img src={arrow} alt="arrow" onClick={res_click} />
                    </div>
                  </div>
                </li>
                {resourcesList && (
                  <li>
                    <ul>
                      <li>Standarts</li>
                      <li>Manual</li>
                      <li>Brand Intake Form</li>
                    </ul>
                  </li>
                )}
                <li>
                  <div className={style.row}>
                    ECCOsystem
                    <div className={style.icon}>
                      <img src={arrow} alt="arrow" onClick={ecco_click} />
                    </div>
                  </div>
                </li>
                {showEccosystemList && (
                  <li>
                    <div>
                      <ul>
                        <li>Brands</li>
                        <li>Retailers</li>
                        <li>Labs</li>
                      </ul>
                    </div>
                  </li>
                )}
                <li>Education Hub</li>
                <li>Donate</li>
              </ul>
            </div>
            {/* <div className={style.bio}>
              <ul>
                <li className={style.head}>Other</li>
                <li>ECCOsystem</li>
                <li>ECCOsystem</li>
                <li>ECCOsystem</li>
                <li>Resources</li>
                <li>Resources</li>
              </ul>
            </div> */}
            <div className={style.bio}>
              <ul>
                <li className={style.head}>Social</li>
                <li>
                  <div className={style.row}>
                    <div className={style.icon}>
                      <img src={facebook} alt="Facebook" />
                    </div>
                    Facebook
                  </div>
                </li>
                <li>
                  <div
                    className={style.row}
                    onClick={() =>
                      window.open("https://x.com/ECCOCert", "_blank")
                    }
                  >
                    <div className={style.icon}>
                      <img src={twitter} alt="Twitter" />
                    </div>
                    Twitter
                  </div>
                </li>
                <li>
                  <div
                    className={style.row}
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/ecco-certified/",
                        "_blank"
                      )
                    }
                  >
                    <div className={style.icon}>
                      <img src={link} alt="LinkedIn" />
                    </div>
                    Linkedln
                  </div>
                </li>
                <li>
                  <div
                    className={style.row}
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/ecco_cert/",
                        "_blank"
                      )
                    }
                  >
                    <div className={style.icon}>
                      <img src={instagram} alt="Instagram" />
                    </div>
                    Instagram
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={style.copyright}>
        <span>@2024 ECCO. All rights reserved</span>
        <div className={style.copy_span}>
          <span>Privacy policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </div>
  );
}
