import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = ({ first, second }) => {
  return (
    <div className={css.navigation}>
      <NavLink className={css.link} to={first}>
        {first === "/" ? "Home" : first}
      </NavLink>
      <NavLink className={css.link} to={second}>
        {second === "/movies" ? "Movies" : second}
      </NavLink>
    </div>
  );
};

export default Navigation;
