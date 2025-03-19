import { getFiveForecast } from "../../api/request";

const isWeather = (dt1: number, dt2: number): boolean => {
  return Math.floor(dt1 / 86400) === Math.floor(dt2 / 86400);
};

export const useFetchForecast = async (lat: string, lon: string) => {
  try {
    const { data } = await getFiveForecast(lat, lon);

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
    return { error: e };
  }
};
