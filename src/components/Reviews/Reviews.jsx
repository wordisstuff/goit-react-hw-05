import CSS from "./Reviews.module.css";
const Reviews = ({ data }) => {
  if (data.length === 0) return <p> No reviews</p>;
  return (
    <div>
      {data.map((review) => (
        <li className={CSS.list} key={review.id}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </div>
  );
};

export default Reviews;
