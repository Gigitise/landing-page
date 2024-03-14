import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import "./faq.css";
import { faqs } from "../../utils/utilities";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="faq-main-container">
      <h1>Learn more about us with FAQs</h1>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div className="faq" key={index}>
            <button className="qstn" onClick={() => handleClick(index)}>
              {faq.question}
              <IoMdArrowDropdown className="drop-icon" />
            </button>
            {openIndex === index && (
              <div className="panel">
                <>{faq.answer}</>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
