import React from "react";
import { ReactComponent as Bath } from "../../galary/svg/bath.svg";
import { ReactComponent as Bed } from "../../galary/svg/bed.svg";
import { ReactComponent as Car } from "../../galary/svg/car.svg";
import { ReactComponent as Stairs } from "../../galary/svg/stairs.svg";
import style from "./sell.module.scss";

const Sell = () => {
  return (
    <div className={style.sectionwrapper}>
      <p className={style.sectionname}>Ready to Sell!</p>
      <h2 className={style.detailstitle}>Let’s tour and see our house!</h2>
      <p className={style.detailstext}>
        Houses recommended by our partners that have been curated to become the
        home of your dreams!
      </p>
      <div className={style.detailswrapper}>
        <p>House Detail</p>
        <ul className={style.detailslist}>
          <li className={style.detailsitem}>
            <Bed className={style.detailsicon} />
            <span>4 Bedrooms</span>
          </li>
          <li className={style.detailsitem}>
            <Bath className={style.detailsicon} />
            <span>1 Carport</span>
          </li>
          <li className={style.detailsitem}>
            <Car className={style.detailsicon} />
            <span>2 Bathrooms</span>
          </li>
          <li className={style.detailsitem}>
            <Stairs className={style.detailsicon} />
            <span>2 Floors</span>
          </li>
        </ul>
      </div>
      <div>
        <p></p>
        <span></span>
        <button>Contact Now</button>
      </div>
    </div>
  );
};

export default Sell;
