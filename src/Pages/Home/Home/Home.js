import React from "react";
import Footer from "../../Shared/Footer/Footer";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Furniture/Category/Category";
import Furniture from "../Furniture/Furniture";
import Furnitures from "../Furnitures/Furnitures";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Furnitures></Furnitures>
      <About></About>
      <Footer></Footer>
    </div>
  );
};

export default Home;
