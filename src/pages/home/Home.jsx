import React from "react";
import Hero from "./Hero";
import Courses from "../course/Courses";
import SignUp from "./SignUp";
import Join from "./Join";
import Blog from "./blog";
import Review from "../review/Review";

const Home = () => {
  return (
    <>
      <Hero />
      <Courses />
      <Review />
      <SignUp />
      <Join />
      <Blog />
    </>
  );
};

export default Home;
