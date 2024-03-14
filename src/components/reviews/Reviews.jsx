import { FaStar } from "react-icons/fa";
import "./reviews.css";
import { FaQuoteLeft } from "react-icons/fa";
import { reviews } from "../../utils/utilities";
import { createEvent } from "../../utils/ga4";

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
            <strong>{review.topic}</strong>
            <p>{review.review}</p>
            <article>Freelancer, {review.name}</article>
          </div>
        ))}
      </div>
      <a
        href="https://clients.gigitse.com/create-task"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => createEvent("Gigitise Open", "Click", "Create Gig")}
      >

        <button className=" mt-12 btn--blue_220 w-button">Create gig</button>
      </a>
    </div>
  );
};
export default Reviews;
