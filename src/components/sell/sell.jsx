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
      <h2>Let’s tour and see our house!</h2>
      <p>
        Houses recommended by our partners that have been curated to become the
        home of your dreams!
      </p>
      <p>House Detail</p>
      <ul className={style.iconlist}>
        <li>
          <Bed className={style.icon} />
        </li>
        <li>
          <Bath className={style.icon} />
        </li>
        <li>
          <Car className={style.icon} />
        </li>
        <li>
          <Stairs className={style.icon} />
        </li>
      </ul>
      <div>
        <p></p>
        <span></span>
        <button>Contact Now</button>
      </div>
    </div>
  );
};

export default Sell;
