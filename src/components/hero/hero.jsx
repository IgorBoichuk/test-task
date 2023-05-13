import Icon from "../icons/icons";
import style from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={style.sectionwrapper}>
      <div className={style.sectioncontentwrapper}>
        <h1 className={style.title}>
          find the place to live{" "}
          <span className={style.titlemod}>your dreams</span> easily here
        </h1>
        <p className={style.herotext}>
          Everything you need about finding your place to live will be here,
          where it will be easier for you
        </p>
        <form action="submit" className={style.form}>
          <input type="text" className={style.input} />
          <button type="button" className={style.button}>
            <span className={style.buttontext}>Search</span>
            <Icon name="arrow" color="red" />
          </button>
        </form>
      </div>
      <div className={style.bgimage}></div>
    </div>
  );
};

export default Hero;
