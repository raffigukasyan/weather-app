import { useFetchCurrentForecast } from "../../hooks/weather/useFetchCurrentForecast";
import { useFetchForecast } from "../../hooks/weather/useFetchForecast";

export async function HomeLoader({ request }) {
  const url = new URL(request.url);
  const lat: string = url.searchParams.get("lat");
  const lon: string = url.searchParams.get("lon");

  //await new Promise((resolve) => setTimeout(resolve, 5000));

  const forecastFiveDays = await useFetchForecast(lat, lon);
  const currentForecast = await useFetchCurrentForecast(lat, lon);

  return { forecastFiveDays, currentForecast };
}
