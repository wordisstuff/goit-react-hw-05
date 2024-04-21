import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/api";
import Reviews from "../Reviews/Reviews";
import Loader from "../Loader/Loader";

const MovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();
  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setIsLoading(true);
        const reviews = await getMovieReviews(movieId);
        setMovieReviews(reviews);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieDetails();
  }, [movieId]);
  return (
    <>
      {isLoading && <Loader />}
      <h2>Movie Reviews</h2>
      <ul>{movieReviews && <Reviews data={movieReviews} />}</ul>
    </>
  );
};

export default MovieReviews;
