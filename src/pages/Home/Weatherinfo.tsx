import { WeeklyPanel } from "@/components /WeatherWeek/WeeklyPanel";
import { ForecastResponse } from "@/types/Weather/forecast";
import { CurrentWeatherResponse } from "@/types/Weather/weather";

interface WeatherInfoProps {
  forecastFiveDays: Promise<ForecastResponse> | null;
  currentForecast: Promise<CurrentWeatherResponse> | null;
  error: string | null;
}

export const WeatherInfo = ({
  forecastFiveDays,
  currentForecast,
  error,
}: WeatherInfoProps) => {
  return (
    <section className="w-full px-30 py-10 bg-[rgb(247,246,249)]">
      {!error && forecastFiveDays ? (
        <WeeklyPanel forecastFiveDays={forecastFiveDays} />
      ) : null}
    </section>
  );
};
