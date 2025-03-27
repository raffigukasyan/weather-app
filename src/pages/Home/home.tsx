import { JSX, Suspense } from "react";
import { Control } from "./control";
import { Info } from "./info";
import { useLoaderData } from "react-router";

export const Home = (): JSX.Element => {
  const { forecastFiveDays, currentForecast } = useLoaderData();

  console.log(forecastFiveDays, currentForecast);
  return (
    <Suspense fallback={<div>dasdasd</div>}>
      <main className="flex w-full h-screen">
        <Control forecastFiveDays={forecastFiveDays} />
        <Info />
      </main>
    </Suspense>
  );
};
