import "./body.css";
import Steps from "../../components/steps/Steps";
import Reviews from "../../components/reviews/Reviews";
import Faq from "../../components/faq/Faq";
import Services from "../../components/our-services/Services";
import Process from "../../components/Step-to-place/Steps";
import Banner from "../../components/Banner/Banner";
import Comprehensive from "../../components/comprehensive/Comprehensive";
import { useNavigate } from "react-router-dom";
import Competitive from "../../components/competitive-edge/Competitive";

const Body = () => {
  return (
    <div className="body">
      <Banner />
      <Services />
      <Comprehensive />
      <Competitive />
      <Process />
      <Reviews />
      <Faq />
      <br />
      <br />
    </div>
  );
};

export default Body;
