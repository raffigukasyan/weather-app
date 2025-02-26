import { getWheather } from "../../api/request.ts";

export async function WeatherLoader({ request }) {
  const url = new URL(request.url);
  const lat: string = url.searchParams.get("lat");
  const lon: string = url.searchParams.get("lon");

  const isWeather = (dt1: number, dt2: number): boolean => {
    return Math.floor(dt1 / 86400) === Math.floor(dt2 / 86400);
  };

  try {
    const { data } = await getWheather(lat, lon);

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
    throw new Response("Not Found", { status: 404 });
  }
}
