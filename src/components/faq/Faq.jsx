import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import "./faq.css";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const faqs = [
    {
      question: "What subjects or topics do Gigitise freelancers cover?",
      answer:
        "Gigitise freelancers cover a wide range of subjects and topics including writing, programming, website development, design, and more",
    },
    {
      question: "Is my payment information secure with Gigitise?",
      answer:
        "Yes, Gigitise utilizes industry-standard encryption and security protocols to safeguard payment information and ensure a secure transaction process",
    },
    {
      question: "Can I request revisions or edits to the content?",
      answer:
        "Gigitise offers unlimited revisions, allowing clients to collaborate closely with freelancers to refine content until it exceeds their expectations",
    },
    {
      question: "How do I place my first gig on Gigitise?",
      answer:
        "Placing a gig on Gigitise involves creating a gig by filling out a form with details such as instructions and deadlines, assigning a freelancer, and then receiving the completed task on time for review",
    },
    {
      question: "How can I find freelancers on Gigitise?",
      answer:
        "To find freelancers on Gigitise, you can browse through their profiles, review their skills and experiences, and then assign them your gig",
    },
    {
      question: "What services does Gigitise offer?",
      answer:
        "Gigitise offers a range of services including essay writing, homework and assignments assistance, programming and technical solutions, and more.",
    },
  ];

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
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
