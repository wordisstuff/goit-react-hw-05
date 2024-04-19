import { NavLink } from "react-router-dom";
import CSS from "./Movie.module.css";

const Movie = ({
  title,
  overview,
  //  backdrop,
  poster,
  popularity,
  release,
  id,
}) => {
  const handleDetailes = () => {
    console.log(id);
  };

  return (
    <NavLink
      onClick={handleDetailes}
      className={CSS.listLink}
      to={`/movies/${id}`}
    >
      <li className={CSS.list}>
        <h2>{title}</h2>
        <div className={CSS.img}>
          <img src={`https://image.tmdb.org/t/p/w200${poster}`} alt={title} />
          <p>{overview}</p>
        </div>
        <div className={CSS.imageInfo}>
          {release && (
            <p>
              Release date: <span>{release}</span>
            </p>
          )}
          <p>
            Popularity: <span>{popularity}</span>
          </p>
        </div>
      </li>
    </NavLink>
  );
};

export default Movie;
