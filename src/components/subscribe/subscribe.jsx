import React from "react";

import style from "./subscribe.module.scss";

const Subscribe = () => {
  return (
    <div className={style.sectionwrapper}>
      <p className={style.sectiontitle}>
        Subscribe For More Info and update from Hounter
      </p>
      <form action="submit" className={style.form}>
        <input type="email" className={style.input} />
        <button type="submit" className={style.button}>
        <span className={style.buttontext}>Subsribe Now</span>          
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
