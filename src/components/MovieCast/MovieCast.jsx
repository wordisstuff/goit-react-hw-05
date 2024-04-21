import { useEffect, useState } from "react";
import { getMovieCast } from "../../services/api";
import { useParams } from "react-router-dom";
import Cast from "../Cast/Cast";
import CSS from "./MovieCast.module.css";
import Loader from "../Loader/Loader";

const MovieCast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setIsLoading(true);
        const cast = await getMovieCast(movieId);
        setMovieCast(cast);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      <h2>Movie Casts</h2>
      <ul className={CSS.casts}>
        {movieCast &&
          movieCast.map((cast) => <Cast key={cast.cast_id} cast={cast} />)}
      </ul>
    </div>
  );
};

export default MovieCast;
