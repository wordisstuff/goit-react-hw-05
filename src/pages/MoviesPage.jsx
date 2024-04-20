import { useEffect, useState } from "react";
import { requesMovieByQuery } from "../services/api";
import MovieList from "../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await requesMovieByQuery(query);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("Finally");
      }
    }

    fetchMovies();
  }, [query]);

  return (
    <div>
      <h2>Movies Search</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault(), setQuery(value);
        }}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
