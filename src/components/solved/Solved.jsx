import { SlBadge } from "react-icons/sl";

const Solved = () => {
  return (
    <div className="completed">
      <section>
        <dl className="new">NEW</dl>
        <h1 className="intro__heading">
          Want just to get already completed gigs?
        </h1>
        <h2>We got you covered!</h2>
        <div className="desc">
          <article className="mx-auto mt-4 max-w-md text-gray-500">
            Check our archive library for already completed assignments, essays,
            gigs for you. You only pick what you need!
          </article>
        </div>
        <div className="badge">
          <article>
            <span className="strike-price">30%</span> OFF
          </article>
          <div>
            <SlBadge className="badge-icon" size={200} />
          </div>
        </div>
        <button className="btn--blue_220 w-button">
          <a href="https://clients.gigitse.com/login">
            Check Library
          </a>
        </button>
      </section>
    </div>
  );
};

export default Solved;
