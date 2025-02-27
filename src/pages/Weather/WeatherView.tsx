import { useLoaderData } from "react-router";
import { TodaysDate } from "../../components /TodaysDate.tsx";
import { WeatherChart } from "../../components /WeatherChart.tsx";
import { useDataChart } from "../../hooks/weather/useDataChart.tsx";

export const WeatherView = () => {
  const weather = useLoaderData();
  const data = useDataChart(weather.list);
  return (
    <div className={"w-full px-5 py-8"}>
      <TodaysDate />
      <div className={"w-full  h-[300px]"}>
        <WeatherChart data={data} />
      </div>
    </div>
  );
};
