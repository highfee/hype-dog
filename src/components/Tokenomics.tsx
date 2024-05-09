"use client";

import { Chart } from "react-google-charts";
import ContainerLayout from "./ContainerLayout";

export const data = [
  ["Task", "1000000000000"],
  ["Base Network Community Air Drop", 300000000000],
  ["Fair Launch on Uniswap Pool", 500000000000],
  ["Early Engagement/Early Investors", 60000000000],
  ["Team Allocation", 90000000000],
  ["Marketing", 50000000000], // CSS-style declaration
];

export const options = {
  title: "",
  pieHole: 0.4,
  is3D: false,
  backgroundColor: "transparent",
  legend: {
    position: "left",
    textStyle: { color: "black", fontSize: 14 },
    maxLines: 5,
  },
  chartArea: { left: 0, right: 0 },
};

const Tokenomics = () => {
  return (
    <div className="mt-20">
      <ContainerLayout>
        <p className="mb-10 text-3xl md:text-5xl text-white">Tokenomics</p>
        <div className="flex flex-col lg:flex-col gap-5 lg:gap-10">
          {/* <div className="flex-1">sds</div> */}
          <div className="flex-1 ">
            <Chart
              chartType="PieChart"
              width="100%"
              height="400px"
              data={data}
              options={options}
            />
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Tokenomics;
