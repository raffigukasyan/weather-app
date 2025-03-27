import { JSX, Suspense, useEffect } from "react";
import { Control } from "./WeatherOverview";
import { Info, WeatherInfo } from "./Weatherinfo";
import { Await, useLoaderData } from "react-router";
import { ForecastResponse } from "@/types/Weather/forecast";

import { CurrentWeatherResponse } from "@/types/Weather/weather";
import toast from "react-hot-toast";
import { SkeletonLoader } from "@/components /SkeletonLoader";

import { TodayWeather } from "@/components /TodayWeather";

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
      <div className="basis-[35%] flex flex-col">
        <Control />
        {/*{!error && (
          <Suspense fallback={<div>dfasfsdf</div>}>
            <Await resolve={currentForecast}>
              {(forecast) => {
                return <TodayWeather currentForecast={forecast} />;
              }}
            </Await>
          </Suspense>
        )}*/}
      </div>
      {<WeatherInfo />}
    </main>
  );
};
