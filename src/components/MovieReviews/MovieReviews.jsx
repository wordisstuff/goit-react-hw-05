import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestReviewsByMovieId } from "../../services/api";
import Reviews from "../Reviews/Reviews";

const MovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const data = await requestReviewsByMovieId(movieId);
        setMovieReviews(data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("Finally");
      }
    }
    fetchMovieDetails();
  }, [movieId]);

  console.log(movieReviews);
  return (
    <>
      <h2>Movie Reviews</h2>
      <ul>{movieReviews && <Reviews data={movieReviews.results} />}</ul>
    </>
  );
};

export default MovieReviews;
