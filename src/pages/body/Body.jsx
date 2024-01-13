import './body.css';
import Steps from '../../components/steps/Steps';
import Faq from '../../components/faq/Faq';
import questions from '../../assets/questions';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
const Body = () => {

    const navigate = useNavigate();

    return (
        <div className='body'>
            <div className="search-content">
                <input type="text" placeholder='Search For Essays'/>
            </div>
            <div className='body-elements'>
                <div className='body-slogan'>
                    <h1>Get Quality Writing</h1>
                    <article>
                        Welcome to Flexypro, your ultimate solution hub for assignments across perse fields like essays, programming, engineering, accounting, dissertations, and more.
                    </article>
                    <Link to='http://localhost:5173/app' className='hire-us' onClick={()=>navigate('')}>Hire Us</Link>
                </div>
                <img src="https://img.freepik.com/free-vector/studying-concept-illustration_114360-1301.jpg?w=740&t=st=1699562478~exp=1699563078~hmac=f7e370e5ddf75e11e9d7d411932c595f3642961775fad204b6be5a17ed4f9dbe" alt="" />
            </div>
            <div className='body-elements__mobile'>
                <div className='body-slogan'>
                    <h1>Get Quality Writing</h1>
                    <article>
                        Welcome to Flexypro, your ultimate solution hub for assignments across perse fields like essays, programming, engineering, accounting, dissertations, and more.
                    </article>
                    <Link to='http://localhost:5173/app' className='hire-us' onClick={()=>navigate('')}>Hire Us</Link>
                </div>
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
            <h2>Creating your first order?</h2>
            <Steps />
            <div className='promo'>
                <h2>Get a complete paper from as low as <span>$10.00</span></h2>
                <button>Order Now</button>
            </div>
            <div className='call-to-action'>
                <div>
                    <h2>With Flexypro, all your assignments are now doable! <br />
                        Join us for top grades!
                    </h2>
                </div>
                <button>Reach out</button>
            </div>
            <section className='faq__section'>
                <h2>Frequently Asked Questions</h2>
                <div className='faq__content'>
                    {
                        questions.map((question) => ( 
                            <Faq key={question.id} {...question}/>
                        ))
                    }
                </div>
                
            </section>
            
            <br />
            <br />
        </div>
    );
}

export default Body;
