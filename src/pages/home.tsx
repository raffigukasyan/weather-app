import { JSX } from "react";
import { Control } from "../components /WeatherControl/Control";
import { MainInfo } from "../components /WeatherMain/main";
import { useLoaderData } from "react-router";

export const Home = (): JSX.Element => {
  const { forecastFiveDays, currentForecast } = useLoaderData();

  console.log(forecastFiveDays, currentForecast);
  return (
    <main className="flex w-full h-screen">
      <Control />
      <MainInfo />
    </main>
  );
};
