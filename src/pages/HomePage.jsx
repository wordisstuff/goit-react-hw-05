import { useEffect, useState } from "react";
import { requestMovies } from "../services/api";
import MovieList from "../components/MovieList/MovieList";

const HomePage = () => {
  // const [count, setCount] = useState(0)
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await requestMovies();
        setMovies(data.results);
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
