import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Body from "./pages/body/Body";
import Terms from "./components/modals/Terms";
import Privacy from "./components/modals/Privacy";

import { useState } from "react";

function App() {
  const [modal, setModal] = useState(null);

  const openModal = (modalName) => {
    setModal(modalName);
  };

  const closeModal = () => {
    setModal(null);
  };

  const BodyContent = () => {
    return (
      <>
        <Navbar />
        <Body />
        <Footer openModal={openModal} />
        {modal === 'terms' && <Terms closeModal={closeModal} />}
        {modal === 'privacy' && <Privacy closeModal={closeModal} />}
      </>
    );
  }

  return (
    <>
      {modal && <div className="overlay"></div>}
      <BodyContent />
    </>
  )
}

export default App
