import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Body from "./pages/body/Body";

function App() {

  const BodyContent = () => {
    return (
      <>
        <Navbar />
        <Body />
        <Footer />
      </>
    )
  }
  return (
    <>
      <BodyContent />
    </>
  )
}

export default App
