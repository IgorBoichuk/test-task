import React from "react";
import { ReactComponent as House } from "../../galary/svg/for-sprite/house.svg";
import { ReactComponent as Villa } from "../../galary/svg/for-sprite/villa.svg";
import { ReactComponent as Apartment } from "../../galary/svg/for-sprite/apartment.svg";
import { ReactComponent as Arrow } from "../../galary/svg/for-sprite/arrow.svg";
import style from "./recommendation.module.scss";

const Recommendation = () => {
  return (
    <div className={style.sectionwrapper}>
      <p className={style.sectionname}>Our Recommendation</p>
      <div className={style.sectionheadwrapper}>
        <h2 className={style.sectiotitle}>Featured House</h2>
        <ul className={style.filterlist}>
          <li className={style.filteritem}>
            <button className={style.filterbutton}>
              <House /> House
            </button>{" "}
          </li>
          <li className={style.filteritem}>
            <button className={style.filterbutton}>
              <Villa />
              Villa
            </button>{" "}
          </li>
          <li className={style.filteritem}>
            <button className={style.filterbutton}><Apartment /> Apartment</button>{" "}
          </li>
        </ul>
        <ul className={style.controls}>
            <li className={style.controlbutton}><Arrow className={style.leftarrow}/></li>
            <li className={style.controlbutton}><Arrow  className={style.rightarrow}/></li>
        </ul>
      </div>
    </div>
  );
};

export default Recommendation;