/* eslint-disable react/prop-types */
import { useState } from 'react';
import './faq.css';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Faq = ( {question, response}) => {
    const [quiz, setQuiz] = useState(false);
    
    return (
        <div className='faq'>
            <div className='faq-content'>
                <div>
                    <h4>{question}</h4>
                    <button type='button' onClick={() => setQuiz(!quiz)}>
                        {quiz ? <FaAngleUp size={25} color='#0360d1'/> : <FaAngleDown size={25} color='#0360d1'/> }
                    </button>
                    
                </div>
            </div>
            {quiz && <article>
                    {response}
                </article>
            }
        </div>
    );
}

export default Faq;
