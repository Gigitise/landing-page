import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "./footer.css";
import "react-toastify/dist/ReactToastify.css";

const Footer = ({ openModal }) => {
  const subURL = `${import.meta.env.VITE_API_URL}/subscribe-letter/`;
  const performSubscribe = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    try {
      const subscribe = await fetch(subURL, {
        method: "post",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      if (subscribe.ok) {
        toast.success(
          "Subscription success, you will be receiving our news letters!"
        );
      } else {
        toast.error("Failed to register the email, try again");
      }
    } catch (error) {
      console.log(error);
      toast.error("We were unable to add the email at the moment");
    }
  };
  return (
    <footer>
      <ToastContainer />
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
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  openModal("terms");
                }}
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="https://clients.gigitse.com/login">Login</a>
            </li>
            <li>
              <a href="https://clients.gigitse.com/register">Sign Up</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  openModal("privacy");
                }}
              >
                Privacy Policy
              </a>
            </li>
            <li>Contact Us</li>
            <div className="contacts">
              <span>info@gigitise.com</span>
              <span>support@gigitise.com</span>
            </div>
          </ul>
        </div>

        <div>
          <h3>Subscription</h3>
          <form className="subscription" onSubmit={performSubscribe}>
            <input id="email" type="email" required placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="container">
        <div>
          <p>Copyright © Gigitise | All rights reserved</p>
        </div>

        <div>
          <ul className="social-icons">
            <li>
              <a
                onClick={() => createEvent("Social media", "Click", "Facebook")}
                className="facebook"
                href="#"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                onClick={() => createEvent("Social media", "Click", "Twitter")}
                className="twitter"
                href="#"
              >
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  createEvent("Social media", "Click", "Instagram")
                }
                className="instagram"
                href="#"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
