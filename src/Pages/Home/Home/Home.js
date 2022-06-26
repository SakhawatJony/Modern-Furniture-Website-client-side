import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Furniture/Category/Category";
import Furnitures from "../Furnitures/Furnitures";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Furnitures></Furnitures>
      <About></About>
    </div>
  );
};

export default Home;
