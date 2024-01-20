import './footer.css';
import { FaInstagram, FaFacebook, FaPinterest, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='footer'>            
            <h2>Gigitise</h2>
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
                    <a href="#facebook"><FaFacebook color='#0360d1'/></a>
                    <a href="#insta"><FaInstagram color='#0360d1'/></a>
                    <a href="#pinterest"><FaPinterest color='#0360d1'/></a>
                    <a href="#x-app"><FaTwitter color='#0360d1'/></a>
                    <a href="#github"><FaGithub color='#0360d1'/></a>
                </div>
            </div>
            <article>&copy; Gigitise-{year}</article>
        </footer>
    );
}

export default Footer;
