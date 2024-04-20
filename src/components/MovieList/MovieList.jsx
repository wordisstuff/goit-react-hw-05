import Movie from "../Movie/Movie.jsx";
import CSS from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <>
      <ul className={CSS.list}>
        {movies &&
          movies.map(
            ({
              id,
              adult,
              title,
              backdrop_path,
              poster_path,
              popularity,
              release_date,
            }) => {
              return (
                <Movie
                  key={id}
                  id={id}
                  adult={adult}
                  title={title}
                  backdrop={backdrop_path}
                  poster={poster_path}
                  popularity={popularity}
                  release={release_date}
                />
              );
            }
          )}
      </ul>
    </>
  );
};

export default MovieList;

// adult
// :
// false
// backdrop_path
// :
// "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg"
// genre_ids
// :
// (2) [878, 12]
// id
// :
// 693134
// media_type
// :
// "movie"
// original_language
// :
// "en"
// original_title
// :
// "Dune: Part Two"
// overview
// :
// "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee."
// popularity
// :
// 3437.313
// poster_path
// :
// "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
// release_date
// :
// "2024-02-27"
// title
// :
// "Dune: Part Two"
// video
// :
// false
// vote_average
// :
// 8.298
// vote_count
// :
// 2951
