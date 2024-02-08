import { FaStar } from "react-icons/fa";
import "./reviews.css";
import { FaQuoteLeft } from "react-icons/fa";
import { reviews } from "../../utils/utilities";

const Reviews = () => {
  return (
    <div className="reviews-container">
      <div>
        <h1 className="pb-12 mt-4">
          <span className="quote">
            <FaQuoteLeft size={40} />
          </span>
          What clients say about us
        </h1>
        <h3 className="mb-4">
          1000+ Reviews
          <span>
            <FaStar size={22} className="icon" />
            <FaStar size={22} className="icon" />
            <FaStar size={22} className="icon" />
            <FaStar size={22} className="icon" />
            <FaStar size={22} className="icon" />
          </span>
        </h3>
      </div>
      <div className="reviews">
        {reviews.map((review, reviewIndex) => (
          <div className="review" key={reviewIndex}>
            <p>{review.review}</p>
            <article>{review.name}</article>
          </div>
        ))}
      </div>
      <button className=" mt-12 btn--blue_220 w-button">Create gig</button>
    </div>
  );
};
export default Reviews;
