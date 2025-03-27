import { Coordinates } from "../shared/locations";

export type WeatherCondition = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type MainWeather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
};

export type Wind = {
  speed: number;
  deg: number;
  gust: number;
};

export type Clouds = {
  all: number;
};

export type Rain = {
  "1h": number;
};

export type SysInfo = {
  type: number;
  id: number;
  country: string;
  message?: string;
  sunrise: number;
  sunset: number;
};


export type CurrentWeatherResponse = {
  coord: Coordinates;
  weather: WeatherCondition[];
  base: string;
  main: MainWeather;
  visibility: number;
  wind: Wind;
  rain?: Rain;
  clouds: Clouds;
  dt: number;
  sys: SysInfo;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};
