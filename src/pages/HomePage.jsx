import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/api";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";

const HomePage = () => {
  // const [count, setCount] = useState(0)
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const movies = await getTrendingMovies();
        setMovies(movies);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
