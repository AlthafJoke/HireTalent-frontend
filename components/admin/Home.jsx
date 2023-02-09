import React from "react";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-4">
          <SideBar />
        </div>
        <div className="col-xl-9 col-lg-8"></div>
      </div>
      
    </div>
  );
};

export default Home;
