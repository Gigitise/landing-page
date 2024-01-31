import './body.css';
import Steps from '../../components/steps/Steps';
import Faq from '../../components/faq/Faq';
import Services from '../../components/our-services/Services';
import Process from '../../components/Step-to-place/Steps';
import Banner from '../../components/Banner/Banner';
import Stats from '../../components/stats/Stats';
import Comprehensive from '../../components/comprehensive/Comprehensive';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Body = () => {

    const navigate = useNavigate();

    return (
        <div className='body'>
            <div className="search-content">
                <input type="text" placeholder='Search For Essays'/>
            </div>
            <div className='common-services'>
                <h2>Common services</h2>
                <div className='common-services-content'>
                    <article>General Writing</article>
                    <article>Programming</article>
                    <article>Accounting</article>
                    <article>Desertetion</article>
                    <article>Essays</article>
                </div>
            </div>
            <Banner />
           
            {/** 
             *  <h2>Creating your first order?</h2>
            <Steps />
            <div className='promo'>
                <h2>Get a complete paper from as low as <span>$10.00</span></h2>
                <button>Order Now</button>
            </div>
            */}
            <Stats  />
            <Services  />
            <Comprehensive />
            <Process />
            <div className='call-to-action'>
                <div>
                    <h2>With Flexypro, all your assignments are now doable! <br />
                        Join us for top grades!
                    </h2>
                </div>
                <button>Reach out</button>
            </div> 
            
            <Faq />
            <br />
            <br />
        </div>
    );
}

export default Body;
