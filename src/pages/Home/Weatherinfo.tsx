import { Suspense } from "react";
import { Await } from "react-router";

export const WeatherInfo = () => {
  return (
    <section className="w-full bg-gray-200/50">
      {/*<Suspense fallback={<div>dfasfsdf</div>}>
        <Await resolve={Promise.all([forecastFiveDays, currentForecast])}>
          {([forecast, current]) => {
            return (
              <Info forecastFiveDays={forecast} currentForecast={current} />
            );
          }}
        </Await>
      </Suspense>*/}
    </section>
  );
};
