import CSS from "./Cast.module.css";
const Cast = ({ cast }) => {
  return (
    <div className={CSS.cast}>
      <li>
        <img
          className={CSS.img}
          src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
          alt={cast.name}
        />
        <h3>{cast.name}</h3>
      </li>
    </div>
  );
};

export default Cast;
