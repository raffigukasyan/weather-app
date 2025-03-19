import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { JSX } from "react";

export const WeatherChart = ({ data }): JSX.Element => {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <AreaChart width={400} height={200} data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#C8D2D6" stopOpacity={1} />
            <stop offset="95%" stopColor="#C8D2D6" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} strokeDasharray={" 2 2 "} />
        <XAxis tickMargin={5} dataKey={"day"} />
        <YAxis tickMargin={5} tickFormatter={(value) => `${value}°`} />
        <Tooltip />
        <Area
          activeDot={{ r: 8, fill: "#2F68FD" }}
          baseValue={"dataMin"}
          type="bump"
          dataKey={"temp"}
          stroke="#2A4C7F"
          strokeWidth={5}
          fill="url(#colorUv)"
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
