import style from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <a href="/" className={style.logolink}>
        <svg className={style.logo}>
          <use href="../../galary/svg/symbol-defs.svg#logo"></use>
        </svg>
      </a>
      <ul className={style.navlist}>
        <li className={style.navitem}>About Us</li>
        <li className={style.navitem}>Article</li>
        <li className={style.navitem}>
          Property
          <svg className={style.navarrow}>
            <use href="../../galary/svg/symbol-defs.svg#arrow"></use>
          </svg>
        </li>
      </ul>
      <div className={style.signup}>
        <span>Sign Up!</span>
      </div>
    </nav>
  );
};

export default Navbar;