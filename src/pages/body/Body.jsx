import "./body.css";
import Steps from "../../components/steps/Steps";
import Reviews from "../../components/reviews/Reviews";
import Faq from "../../components/faq/Faq";
import Services from "../../components/our-services/Services";
import Process from "../../components/Step-to-place/Steps";
import Banner from "../../components/Banner/Banner";
import Stats from "../../components/stats/Stats";
import Comprehensive from "../../components/comprehensive/Comprehensive";
import { useNavigate } from "react-router-dom";

const Body = () => {
  return (
    <div className="body">
      <Banner />
      <Stats />
      <Services />
      <Comprehensive />
      <Process />
      <Reviews />
      <Faq />
      <br />
      <br />
    </div>
  );
};

export default Body;
