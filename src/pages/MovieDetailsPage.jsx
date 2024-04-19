import { useEffect, useState } from "react";
import { requestMoviesById } from "../services/api";
import { NavLink, useParams, Routes, Route } from "react-router-dom";
import MovieCast from "../components/MovieCast/MovieCast";
import MovieReviews from "../components/MovieReviews/MovieReviews";

import styled from "styled-components";

const StaledLink = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
  .link {
    border: none;
    border-radius: 5px;
    background-color: rgb(103, 102, 102);
    padding: 15px 20px;
    color: bisque;
    text-decoration: none;
    transition: all 0.3s;
  }
  .active {
    background-color: rgb(235, 71, 71);
  }
`;
const MovieDetailsPage = () => {
  const [movieIdState, setMovieIdState] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  if (movieIdState !== movieId) {
    setMovieIdState(movieId);
  }

  useEffect(() => {
    async function fetchMovieDetailsCast() {
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
    fetchMovieDetailsCast();
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
      <StaledLink>
        <NavLink className={"link"} to="cast">
          Cast
        </NavLink>
        <NavLink className={"link"} to="reviews">
          Reviews
        </NavLink>
      </StaledLink>
      <Routes>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Routes>
    </div>
  );
};

export default MovieDetailsPage;
