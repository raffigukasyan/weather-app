import { Suspense } from "react";
import { Search } from "../../components /Search/search";
import { GeoLoaction } from "../../components /geolocation";
import { Await } from "react-router";
import { CurretWeatherSummary } from "@/components /WeatherOverview/CurrentWeatherSummary";
import { WeatherSummarySkeleton } from "@/components /WeatherOverview/WeatherSummarySkeleton";
import { CurrentWeatherResponse } from "@/types/Weather/weather";
import { WeatherLocationResponse } from "@/types/shared/locations";

interface WeatherOverviewProps {
  currentForecast: Promise<CurrentWeatherResponse> | null;
  error: string | null;
}

export const WeatherOverview = ({
  currentForecast,
  error,
}: WeatherOverviewProps) => {
  return (
    <div className="h-full flex flex-col py-10 px-12 w-[30%] bg-white">
      <div className="w-full flex justify-between items-center mb-10">
        <Search />
        <GeoLoaction />
      </div>
      {!error && (
        <Suspense fallback={<WeatherSummarySkeleton />}>
          <Await resolve={currentForecast}>
            {(forecast) => {
              return (
                <>
                  <CurretWeatherSummary forecast={forecast} />
                </>
              );
            }}
          </Await>
        </Suspense>
      )}
    </div>
  );
};
//rostokna2018@mail.ru
