import gigitise from "../../../public/gigitise.svg";
import "./navbar.css";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <img src={gigitise} style={{ width: "3rem" }} alt="logo" />
        <h1>Gigitise</h1>
      </div>
      <div className="search-icon">
        <CiSearch size={30} />
      </div>
      <div className="nav-right">
        <div className="search-bar">
          <input type="text" placeholder="Search for Essays" />
        </div>
        <div className="nav-btns">
          <button>Sign Up</button>
          <button>Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
