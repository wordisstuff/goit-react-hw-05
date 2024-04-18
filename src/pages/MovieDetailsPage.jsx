import { useEffect } from "react";
import MovieList from "../components/MovieList/MovieList";
import { requestMoviesById } from "../services/api";
import { useSearchParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('name'));
  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const data = await requestMoviesById();
        //   setMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("Finally");
      }
    }

    fetchMovieDetails();
  }, []);
  return (
    <div>
      <MovieList />
    </div>
  );
};

export default MovieDetailsPage;
