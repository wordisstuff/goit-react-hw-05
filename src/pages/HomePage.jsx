import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/api";
import MovieList from "../components/MovieList/MovieList";

const HomePage = () => {
  // const [count, setCount] = useState(0)
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await getTrendingMovies();
        setMovies(movies);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("Finally");
      }
    }

    fetchMovies();
  }, []);

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
