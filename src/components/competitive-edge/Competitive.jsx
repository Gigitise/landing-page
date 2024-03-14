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
            <div className="item" key={key}>
              <h3>{item.title}</h3>
              <div>
                <div>
                  {<item.icon size={iconSize} className="text-blue-400" />}
                </div>
                <article className="mx-auto mt-1 max-w-md text-gray-500">
                  {item.description}
                </article>
              </div>
              {key === 4 && <div className="new-competitive">New</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Competitive;
