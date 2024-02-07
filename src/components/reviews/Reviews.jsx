import { FaStar } from "react-icons/fa";
import "./reviews.css";
import { FaQuoteLeft } from "react-icons/fa";
import { services } from "../../utils/utilities";

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
        <div className="review">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            veniam eveniet labore autem distinctio commodi hic odit minima odio
            minus cumque magni.
          </p>
          <article>John Doe</article>
        </div>
        <div className="review">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            veniam eveniet labore autem distinctio commodi hic odit minima odio
            minus cumque magni.
          </p>
          <article>John Doe</article>
        </div>
        <div className="review">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            veniam eveniet labore autem distinctio commodi hic odit minima odio
            minus cumque magni.
          </p>
          <article>John Doe</article>
        </div>
        <div className="review">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            veniam eveniet labore autem distinctio commodi hic odit minima odio
            minus cumque magni.
          </p>
          <article>John Doe</article>
        </div>
        <div className="review">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            veniam eveniet labore autem distinctio commodi hic odit minima odio
            minus cumque magni.
          </p>
          <article>John Doe</article>
        </div>
      </div>
      <button className=" mt-12 btn--blue_220 w-button">Create gig</button>
    </div>
  );
};
export default Reviews;
