import { useEffect, useState } from "react";
import { getMoviesByQuery } from "../services/api";
import MovieList from "../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) return;
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const movies = await getMoviesByQuery(query);
        setMovies(movies);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, [query]);

  const onSubmit = (e) => {
    e.preventDefault();
    const value = e.target.query.value.toLowerCase().trim();
    if (!value) return;
    setSearchParams({ query: value });
  };

  return (
    <div>
      {isLoading && <Loader />}
      <h2>Movies Search</h2>
      <form onSubmit={onSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
