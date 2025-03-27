import { City } from "../shared/city";
import { Clouds, MainWeather, WeatherCondition, Wind } from "./weather";

export type ForecastSys = {
  pod: "d" | "n";
};

export type ForecastItem = {
  dt: number;
  dt_txt: string;
  pop: number;
  visibility: number;
  weather: WeatherCondition;
  main: MainWeather;
  sys: ForecastSys;
  clouds: Clouds;
  wind: Wind;
};

export type ForecastWithAllTime = ForecastItem & {
  allTime: ForecastItem[];
};

export type ForecastResponse = {
  city: City;
  list: ForecastWithAllTime[];
};
