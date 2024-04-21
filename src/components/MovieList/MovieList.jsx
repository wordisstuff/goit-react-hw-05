import Movie from "../Movie/Movie.jsx";
import CSS from "./MovieList.module.css";
import { useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul className={CSS.list}>
        {movies &&
          movies.map(
            ({
              id,
              adult,
              title,
              backdrop_path,
              poster_path,
              popularity,
              release_date,
            }) => {
              return (
                <Movie
                  location={location}
                  key={id}
                  id={id}
                  adult={adult}
                  title={title}
                  backdrop={backdrop_path}
                  poster={poster_path}
                  popularity={popularity}
                  release={release_date}
                />
              );
            }
          )}
      </ul>
    </>
  );
};

export default MovieList;
