import React from "react";
import HeroContent from "../../components/HeroContent";
import ImageSlider from "../../components/ImageSlider";
import Campaigns from "../../components/Campaigns";
import MenuWrapper from "../../components/product/MenuWrapper";
import About from "@/components/ui/About";
import Reservation from "@/components/Reservation";
import Customers from "@/components/customers/Customers";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroContent />
      <ImageSlider />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
      <Customers />
    </React.Fragment>
  );
};

export default HomePage;
