import { AxiosResponse } from "axios";
import { api } from "./base";
import { WeatherLocationResponse } from "../types/shared/locations";
import { ForecastResponse } from "@/types/Weather/forecast";
import { CurrentWeatherResponse } from "@/types/Weather/weather";

export const searchLocation = async (
  city: string
): Promise<AxiosResponse<WeatherLocationResponse[]>> => {
  try {
    const response = await api.get(
      `/geo/1.0/direct?q=${city}&limit=5&appid=${import.meta.env.VITE_API_KEY}`
    );
    return response;
  } catch (e: Error | unknown) {
    console.log(e);
    throw e;
  }
};

export const getFiveForecast = async (
  lat: string,
  lon: string
): Promise<AxiosResponse<ForecastResponse>> => {
  try {
    const response = await api.get(
      `/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric`
    );
    return response;
  } catch (e: Error | unknown) {
    console.log(e);
    throw e;
  }
};

export const getCurrentForecast = async (
  lat: string,
  lon: string
): Promise<AxiosResponse<CurrentWeatherResponse>> => {
  try {
    const response = await api.get(
      `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric`
    );
    return response;
  } catch (e: Error | unknown) {
    console.log(e);
    throw e;
  }
};
