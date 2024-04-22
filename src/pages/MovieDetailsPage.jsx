import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { getMovieById } from "../services/api";
import { useParams, Routes, Route, Link } from "react-router-dom";

const MovieCast = lazy(() => import("../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../components/MovieReviews/MovieReviews")
);

import { useLocation } from "react-router-dom";

import styled from "styled-components";
import Loader from "../components/Loader/Loader";
import Navigation from "../components/Navigation/Navigation";

const StaledLink = styled.div`
  .active {
    background-color: rgb(235, 71, 71);
  }
`;
const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();

  const backLink = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    async function fetchMovieDetailsCast() {
      try {
        setIsLoading(true);
        const muvie = await getMovieById(movieId);
        setMovieDetails(muvie);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieDetailsCast();
  }, [movieId]);
  return (
    <div>
      {isLoading && <Loader />}
      {movieDetails && (
        <div className={CSS.img}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <p>{movieDetails.overview}</p>
        </div>
      )}
      <Link to={backLink.current}>Go back</Link>
      <StaledLink>
        <Navigation first="cast" second="reviews" />
      </StaledLink>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
