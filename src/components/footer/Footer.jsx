import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>            
            <h2>Flexipro</h2>
            <div className='footer-links'>
                <article>About us</article>
                <article>Contacts</article>
                <article>Help</article>
                <article>Terms & Conditions</article>
            </div>
            <article>&copy; Flexipro-2023</article>
        </footer>
    );
}

export default Footer;