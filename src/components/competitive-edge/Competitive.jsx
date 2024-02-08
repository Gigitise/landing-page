import React from "react";
import { competitive } from "../../utils/utilities";

const Competitive = () => {
  const iconSize = 60;
  return (
    <div className="competitive">
      <h2 className="intro__heading">Why choose Gigitise platform</h2>
      <div className="competitive-items">
        {competitive?.map((item, key) => {
          return (
            <div key={key}>
              <h3>{item.title}</h3>
              <div>
                <div>{<item.icon size={iconSize} />}</div>
                <article>{item.description}</article>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Competitive;
