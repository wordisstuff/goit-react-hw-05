import CSS from "./Movie.module.css";

const Movie = ({adult,
     title,
     overview,
     backdrop,
     poster,
     popularity,
     release,}) => {
 
          return (
            <li className={CSS.list}>
              <div className={CSS.img}>
                <h2>{title}</h2>
                <img
                  onClick={() => openModal({imgUrl:urls.regular,description: alt_description })}
                  src={`https://image.tmdb.org/t/p/w300${poster}`}
                  alt={title}
                />
                <p>{overview}</p>
              </div>
              <div className={CSS.imageInfo}>
                <p>
                Release date: <span>{release}</span>
                </p>
                <p>
                Popularity: <span>{popularity}</span>
                </p>
              </div>
            </li>
          );
};

export default Movie;