import React from "react";
import Banner from "./Banner";
import ChefInfo from "./ChefInfo";
import FeaturedRecipe from "./FeaturedRecipe";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ChefInfo></ChefInfo>
      <FeaturedRecipe></FeaturedRecipe>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
