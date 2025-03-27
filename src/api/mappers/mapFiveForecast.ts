import { ForecastResponse } from "@/types/Weather/forecast";
import { fetchFiveForecast } from "../../api/request";
import { isWeather } from "@/utils/isWeather";

export const mapFiveForecast = async (
  lat: string,
  lon: string
): Promise<ForecastResponse> => {
  try {
    const { data } = await fetchFiveForecast(lat, lon);

    const weahterByDay = data.list.filter(
      (current, idx) => !isWeather(current?.dt, data.list[idx + 1]?.dt)
    );

    const weatherUpdate = weahterByDay.map((current) => {
      return {
        ...current,
        allTime: data.list.filter((el) => isWeather(el?.dt, current?.dt)),
      };
    });

    return { city: data.city, list: weatherUpdate };
  } catch (e) {
    console.log(e);
    throw e;
  }
};
