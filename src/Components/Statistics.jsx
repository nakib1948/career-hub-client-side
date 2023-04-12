import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Navbarr from "./Navbarr";

const data = [
  {
    name: "A1",
    marks: 60,
  },

  {
    name: "A2",
    marks: 60,
  },
  {
    name: "A3",
    marks: 55,
  },
  {
    name: "A4",
    marks: 60,
  },
  {
    name: "A5",
    marks: 48,
  },
  {
    name: "A6",
    marks: 60,
  },
  {
    name: "A7",
    marks: 60,
  },
];

const Statistics = () => {
  return (
    <>
      <Navbarr />
      <div className="m-5 ">
        <h1 className="text-center mb-5">Assignment marks chart</h1>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 60]} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="marks"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Statistics;
