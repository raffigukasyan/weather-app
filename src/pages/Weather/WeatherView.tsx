import { useLoaderData } from "react-router";
import { TodaysDate } from "../../components /TodaysDate.tsx";
import { WeatherChart } from "../../components /WeatherChart.tsx";
import { useDataChart } from "../../hooks/weather/useDataChart.tsx";
import { ForecastInfo } from "../../components /ForecastInfo.tsx";
import { ForecastSidebar } from "../../components /ForecastSidebar.tsx";

export const WeatherView = () => {
  const { forecastFiveDays, currentForecast } = useLoaderData();

  console.log(currentForecast, "ddd");
  const data = useDataChart(forecastFiveDays.list);

  return (
    <div className={"flex w-full"}>
      <div className="w-full px-5 py-8">
        <TodaysDate />
        <ForecastInfo
          wind={currentForecast?.wind?.speed}
          pressure={currentForecast.main.pressure}
        />
        <div className={"w-full h-[300px]"}>
          <WeatherChart data={data} />
        </div>
      </div>
      <ForecastSidebar currentForecast={currentForecast} />
    </div>
  );
};
