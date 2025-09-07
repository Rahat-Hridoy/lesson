import React from "react";
import Hero from "./Hero";
import Courses from "../course/Courses";
import SignUp from "./SignUp";
import Join from "./Join";

const Home = () => {
  return (
    <>
      <Hero />
      <Courses />
      <SignUp />
      <Join />
    </>
  );
};

export default Home;
