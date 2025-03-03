import React, { StrictMode } from "react";
import Hero from "../Components/Hero";
import LatestExclusive from "../Components/LatestExclusive";
import BestSeller from "../Components/BestSeller";
import OurPolicy from "../Components/OurPolicy";
import VipCards from "../Components/VipCustomers";
import Newsletter from "../Components/Newsletter";

const Home = () => {
  return (
    <StrictMode>
      <div>
        <Hero></Hero>
        <LatestExclusive />
        <BestSeller />
        <OurPolicy />
        <VipCards />
        <Newsletter />
      </div>
    </StrictMode>
  );
};

export default Home;
