import React from "react";
import Slider from "../Contents/Slider/Slider";
import Features from "../Contents/Features/Features";
import Exclusive from "../Contents/Exclusive/Exclusive";
import SummerCollection from "../Contents/Summer/SummerCollection";
import FeaturedProducts from "../Contents/FeaturedProduts/FeaturedProducts";
import Clients from "../Contents/Clients/Clients";
import Services from "../Contents/Services/Services";

const Home = () => {
  return (
    <>
      <Slider />
      <Features />
      <Exclusive />
      <SummerCollection />
      <FeaturedProducts />
      <Clients />
      <Services />
    </>
  );
};

export default Home;
