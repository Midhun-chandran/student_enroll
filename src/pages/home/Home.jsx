import React from "react";

import FrontSection from "../../components/frontSection/FrontSection";
import MiddleSection from "../../components/middleSection/MiddleSection";
import LastSection from "../../components/lastSection/LastSection.jsx";

import "./home.scss";


const Home = () => {

  return (
    <>
      <FrontSection />
      <MiddleSection />
      <LastSection />
    </>
  );
};

export default Home;
