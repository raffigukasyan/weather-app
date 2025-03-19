import { useFetchCurrentForecast } from "../../hooks/weather/useFetchCurrentForecast.tsx";
import { useFetchForecast } from "../../hooks/weather/useFetchForecast.tsx";

export async function WeatherLoader({ request }) {
  const url = new URL(request.url);
  const lat: string = url.searchParams.get("lat");
  const lon: string = url.searchParams.get("lon");

  const forecastFiveDays = await useFetchForecast(lat, lon);
  const currentForecast = await useFetchCurrentForecast(lat, lon);

  return { forecastFiveDays, currentForecast };

  //{
  //  throw new Response("Not Found", { status: 404 });
  //}
}
