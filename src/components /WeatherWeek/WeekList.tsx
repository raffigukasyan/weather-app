import { ForecastResponse } from "@/types/Weather/forecast";
import { WeekItem } from "./WeekItem";

export const WeekList = ({ forecasts }: { forecasts: ForecastResponse }) => {
  console.log(forecasts);
  return (
    <div className="flex justify-between items-center">
      {forecasts.list.map((forecast) => {
        return (
          <WeekItem
            key={forecast.dt}
            day={forecast.dt_txt}
            temp={forecast.main.temp}
            icon={forecast.weather[0].icon}
          />
        );
      })}
    </div>
  );
};
