import React from "react";
import Chart from "../Chart";

const Dashboard = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-white rounded flex justify-center w-25">
        <h1 className="flex justify-center">jobs</h1>
        <div>
            
        <Chart /> 
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
