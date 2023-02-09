import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const Chart = () => {
  return (
    <div>
      <PieChart
        lineWidth='50'
        animate="true"
        animationDuration="3000"
        animationEasing="ease-out"
        // viewBoxSize="[10,100]"
        // center="[10,10]"

        data={[
          { title: "One", value: 10, color: "#E38627" },
          { title: "Two", value: 15, color: "#C13C37" },
          { title: "Three", value: 20, color: "#6A2135" },
          
        ]}
      />
      ;
    </div>
  );
};

export default Chart;
