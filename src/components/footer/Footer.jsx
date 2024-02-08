import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import "./footer.css";

const Footer = ({openModal}) => {
  return (
    <footer>
      <div className="container info">
        <div>
          <h3>About</h3>
          <p>
            At Gigitise, your success is our priority. Achieving more while
            stressing less has never been easier. Find the right person for your
            essays, project, assignment, classwork and design, With us, you can
            achieve goals effectively allowing you to focus on other side
            matters.
          </p>
        </div>

        <div>
          <h3>Information</h3>
          <ul>
            <li>
              <a href="" onClick={(e) => {e.preventDefault(); openModal('terms');}}>Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="" onClick={(e) => {e.preventDefault(); openModal('privacy');}}>Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Subscription</h3>
          <div className="subscription">
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <p>Copyright © Gigitise | All rights reserved</p>
        </div>

        <div>
          <ul className="social-icons">
            <li>
              <a className="facebook" href="#">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a className="twitter" href="#">
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a className="instagram" href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a className="linkedin" href="#">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
