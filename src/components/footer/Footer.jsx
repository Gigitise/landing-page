import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import './footer.css';

const Footer = () => {
    return (
    <footer>
        <div className='container'>
            <div>
                <h3>About</h3>
                <p>Welcome to Flexypro, your ultimate solution hub for assignments across perse fields like essays, programming, engineering, accounting, dissertations, and more.
                </p>
            </div>

            <div>
                <h3>Information</h3>
                <ul>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Sign Up</a></li>
                    <li><a href="#">Payment & Pricing Model</a></li>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Partnerships</a></li>
                    </ul>
            </div>

            <div>
                <h3>Subscription</h3>
                <div className='subscription'>
                    <input type='email' placeholder='Your email' />
                    <button type='submit'>Subscribe</button>
                </div>
            </div>
            
        </div>
        <div className='container'>
            <div>
                <p>Copyright © Gigitise | All rights reserved</p>
            </div>

            <div>
                <ul className="social-icons">
                    <li><a className="facebook" href="#"><FaFacebookF /></a></li>
                    <li><a className="twitter" href="#"><FaXTwitter /></a></li>
                    <li><a className="instagram" href="#"><FaInstagram /></a></li>
                    <li><a className="linkedin" href="#"><FaLinkedinIn /></a></li>   
                </ul>
            </div>
        </div>
    </footer>
    );
}

export default Footer;
