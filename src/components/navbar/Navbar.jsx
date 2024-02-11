import gigitise from "../../../public/gigitise.svg";
import "./navbar.css";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { useState } from "react";

const Navbar = () => {
  const [searchVisible, setSearchVisible] = useState(true);

  return (
    <nav>
      <div className={`nav-left ${searchVisible? '' : 'visible'}`}>
        <img src={gigitise} style={{ width: "3rem" }} alt="logo" />
        <h1>Gigitise</h1>
      </div>
      <div className="search-icon">
        {searchVisible && <MdKeyboardArrowLeft size={30} onClick={() => setSearchVisible(!searchVisible)}/>}
        <CiSearch size={30} onClick={() => setSearchVisible(!searchVisible)}/>
      </div>
      <div className="nav-right">
        <div className={`search-bar ${searchVisible ? '' : 'mobile-invisible'}`}>
          <input type="text" placeholder="Search for Essays" />
        </div>
        <div className={`nav-btns ${searchVisible? '' : 'visible'}`}>
          <button>Sign Up</button>
          <button>Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;