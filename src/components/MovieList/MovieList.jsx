import ImageCard from "../ImaageCard/ImageCard.jsx";
import CSS from "./MovieList.module.css";

const MovieList = ({ photos, openModal }) => {
  return (
    <>
      <ul className={CSS.list}>
      {photos &&
        photos.map(({id,urls,alt_description,user,likes}) => {
          return (
            <ImageCard  
            key={id} 
            urls={urls}
             alt_description={alt_description} 
             user={user} 
             likes={likes} 
             openModal={openModal} />
          );
        })}
        
      </ul>
    </>
  );
};

export default MovieList;