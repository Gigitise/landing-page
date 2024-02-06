import React from "react";
import { LuCalendarClock } from "react-icons/lu";
import { MdOutlineHelpOutline } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { LuRotateCcw } from "react-icons/lu";
import { MdLibraryBooks } from "react-icons/md";

const Competitive = () => {
  const iconSize = 60;
  return (
    <div className="competitive">
      <h2 className="intro__heading">Why choose Gigitise platform</h2>
      <div className="competitive-items">
        <div>
          <h3>Original content</h3>
          <div>
            <div>
              <MdLibraryBooks size={iconSize} />
            </div>
            <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              possimus facere laudantium itaque ea ipsum officiis nihil.
            </article>
          </div>
        </div>
        <div>
          <h3>On time delivery</h3>
          <div>
            <div>
              <LuCalendarClock size={iconSize} />
            </div>
            <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              possimus facere laudantium itaque ea ipsum officiis nihil.
            </article>
          </div>
        </div>
        <div>
          <h3>24/7 support</h3>
          <div>
            <div>
              <MdOutlineHelpOutline size={iconSize} />
            </div>
            <article>
              Lorem ipssit amet consectetur adipisicing elit. Nulla, possimus
              facere laudantium itaque ea ipsum officiis nihil.
            </article>
          </div>
        </div>
        <div>
          <h3>Payment security</h3>
          <div>
            <div>
              <BsCashCoin size={iconSize} />
            </div>
            <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              possimus facere laudantium officiis nihil.
            </article>
          </div>
        </div>
        <div>
          <h3>Free iterations & edits</h3>
          <div>
            <div>
              <LuRotateCcw size={iconSize} />
            </div>
            <article>
              Lorem ipt amet consectetur adipisicing elit. Nulla, possimus
              facere laudantium itaque ea ipsum officiis nihil.
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitive;
