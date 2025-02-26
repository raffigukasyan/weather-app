import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {JSX} from "react";

export const WeatherChart = ({data}):JSX.Element => {


    return (
        <ResponsiveContainer width={"100%"} height={"100%"}>
            <AreaChart width={500}
            height={300}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
            data={data}>
                <CartesianGrid strokeDasharray={"3 3"}/>
                <XAxis dataKey={"day"} />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey={"temp"} stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
    )
}