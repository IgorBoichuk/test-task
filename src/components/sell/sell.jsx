import React from "react";

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
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
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
