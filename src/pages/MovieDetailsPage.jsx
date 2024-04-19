import { useEffect, useState } from "react";
import { requestMoviesById } from "../services/api";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const [movieIdState, setMovieIdState] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  if (movieIdState !== movieId) {
    setMovieIdState(movieId);
  }

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const data = await requestMoviesById(movieId);
        console.log(data);
        setMovieDetails(data);
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
      {movieDetails && (
        <div className={CSS.img}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <p>{movieDetails.overview}</p>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
