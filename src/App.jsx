import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <div className="container m-auto text-3xl">hello</div>
    </>
  );
};

export default App;
