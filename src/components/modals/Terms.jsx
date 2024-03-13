import { useState } from "react";
import "./modals.css";
import ReactMarkdown from "react-markdown";
import { useEffect } from "react";

const Terms = ({ closeModal }) => {
  const [terms, setTerms] = useState("**Hello**");
  //   useEffect(() => {
  //     fetch("/md/terms.md")
  //       .then((res) => res.text())
  //       .then((text) => {
  //         console.log(text);
  //         setTerms(text);
  //       })
  //       .catch((error) => console.log(error, " Error reading markdown"));
  //   }, []);
  return (
    <div className="modal-container">
      <button onClick={closeModal} className="close-button">
        X
      </button>
      <h1 className="modal-title">Gigitise</h1>
      <h2>Terms & Conditions</h2>
      <p>Last updated: Feb 07, 2024</p>
      <p>
        Please read these terms and conditions carefully before using Our
        Service.
      </p>
      <ReactMarkdown>{terms}</ReactMarkdown>
    </div>
  );
};
export default Terms;
