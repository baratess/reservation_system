import React from "react";

import "./Home.css";
import Slider from "../../Components/Slider/Slider";
import Header from "../../Components/Header/Header";

const Main = () => {
  return (
    <div className="home">
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <Slider />
      </div>
    </div>
  );
};

export default Main;
