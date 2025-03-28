import { JSX, useEffect } from "react";
import { WeatherOverview } from "./WeatherOverview";
import { WeatherInfo } from "./Weatherinfo";
import { useLoaderData } from "react-router";
import { ForecastResponse } from "@/types/Weather/forecast";

import { CurrentWeatherResponse } from "@/types/Weather/weather";
import toast from "react-hot-toast";

export const Home = (): JSX.Element => {
  const { forecastFiveDays, currentForecast, error } = useLoaderData() as {
    forecastFiveDays: Promise<ForecastResponse> | null;
    currentForecast: Promise<CurrentWeatherResponse> | null;
    error: string | null;
  };

  useEffect(() => {
    if (error)
      toast.error(error, {
        icon: "👏",
        position: "top-center",
      });
  }, [error]);
  return (
    <main className="flex w-full h-screen">
      <WeatherOverview currentForecast={currentForecast} error={error} />

      {
        <WeatherInfo
          forecastFiveDays={forecastFiveDays}
          currentForecast={currentForecast}
          error={error}
        />
      }
    </main>
  );
};
