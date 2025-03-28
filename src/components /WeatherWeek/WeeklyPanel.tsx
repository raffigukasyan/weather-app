import { Suspense } from "react";
import { Await } from "react-router";
import { WeekSkeleton } from "./WeekSkeleton";
import { WeekList } from "./WeekList";
import { ForecastResponse } from "@/types/Weather/forecast";

export const WeeklyPanel = ({
  forecastFiveDays,
}: {
  forecastFiveDays: Promise<ForecastResponse>;
}) => {
  return (
    <Suspense fallback={<WeekSkeleton />}>
      <Await resolve={forecastFiveDays}>
        {(forecast) => {
          return (
            <>
              <WeekList forecasts={forecast} />
            </>
          );
        }}
      </Await>
    </Suspense>
  );
};
