import { useEffect, useState } from "react";
import { requestCastByMovieId } from "../../services/api";
import { useParams } from "react-router-dom";
import Cast from "../Cast/Cast";
import CSS from "./MovieCast.module.css";

const MovieCast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const data = await requestCastByMovieId(movieId);
        setMovieCast(data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("Finally");
      }
    }
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      <h2>Movie Casts</h2>
      <ul className={CSS.casts}>
        {movieCast &&
          movieCast.cast.map((cast) => <Cast key={cast.cast_id} cast={cast} />)}
      </ul>
    </div>
  );
};

export default MovieCast;
