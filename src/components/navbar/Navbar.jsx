import './navbar.css';
import logo from "../../assets/gigitise.svg"
import { TiThMenu } from "react-icons/ti";
import { GrClose } from "react-icons/gr";
import { useState } from 'react';

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const openMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    }

    return (
        <nav >
            <div className='nav-container'>
                <div className='nav-logo'>
                    <img src={logo} alt="gigtise" />
                </div>
                <div className='nav-essays--actions__large'>
                    <li>solved Essays</li>
                    <li>create your own</li>
                </div>
                <div className='nav-actions'>
                    <button>Sign Up</button>
                    <button>Login</button>
                </div>
                <div className='mobile-nav'>
                    <button type='menu' onClick={openMobileMenu}>
                        {
                            mobileMenu ?<GrClose />:<TiThMenu/>
                        }
                    </button>
                </div>
            </div>
            {
                mobileMenu &&
                <div className='mobilenav__container'>
                    <div className='mobile__links'>
                        <div className='mobile__link--mininav'>
                            <div className='nav-logo'>
                                <img src={logo} alt="gigtise" />
                            </div>
                            <div className='mobile-nav'>
                                <h4>Gigitise</h4>
                            </div>
                        </div>
                        <div className='nav-essays--actions'>
                            <li>solved Essays</li>
                            <li>create your own</li>
                        </div>
                        <div className='nav-actions__mobile'>
                            <button>Sign Up</button>
                            <button>Login</button>
                        </div>
                    </div>
                </div>
            }
        </nav>
    );
}

export default Navbar;

