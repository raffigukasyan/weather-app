import { mapFiveForecast } from "@/api/mappers/mapFiveForecast";

import { fetchCurrentForecast } from "@/api/request";

export async function HomeLoader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const lat = url.searchParams.get("lat");
  const lon = url.searchParams.get("lon");

  if (!lat || !lon) {
    return {
      error: "Укажите город или нажмите на кнопку локации",
      forecastFiveDays: null,
      currentForecast: null,
    };
  }
  const forecastFiveDays = mapFiveForecast(lat, lon);
  const currentForecast = fetchCurrentForecast(lat, lon);

  return { forecastFiveDays, currentForecast, error: null };
}
