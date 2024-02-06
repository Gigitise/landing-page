import gigitise from '../../../public/gigitise.svg'
import './navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className='nav-left'>
                <img src={gigitise} style={{width:'3rem'}} alt="logo" />
            </div>
            <div className='nav-right'>
                <div className='search-bar'>
                    <input type="text" placeholder='Search for Essays'/>
                </div>
                <div className='nav-btns'>
                    <button>Sign Up</button>
                    <button>Login</button>
                </div>   
            </div> 
        </nav>
    );
}

export default Navbar;

