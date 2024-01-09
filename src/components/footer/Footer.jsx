import './footer.css';
import { FaInstagram, FaFacebook, FaPinterest, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='footer'>            
            <h2>Flexipro</h2>
            <div className='footer-container'>
                <div className='footer-links'>
                    <article>About us</article>
                    <article>Contacts</article>
                    <article>Help</article>
                    <article>Report Issues</article>
                </div>

                <div className='footer-links'>
                    <article>refund Policy</article>
                    <article>terms & Conditions</article>
                    <article>Report a Complain</article>
                </div>
                <div className='footer-links'>
                    <article>Read Essays</article>
                    <article>Newsletter</article>
                    <article>Blog</article>
                    <article>Additional</article>
                </div>
                <div className='footer-links-social'>
                    <a href="#facebook"><FaFacebook/></a>
                    <a href="#insta"><FaInstagram/></a>
                    <a href="#pinterest"><FaPinterest/></a>
                    <a href="#x-app"><FaTwitter/></a>
                    <a href="#github"><FaGithub/></a>
                </div>
            </div>
            <article>&copy; Flexipro-2023</article>
        </footer>
    );
}

export default Footer;
