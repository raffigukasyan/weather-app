import { fetchCurrentForecast } from "../../api/request";

export const useFetchCurrentForecast = async (lat: string, lon: string) => {
  try {
    const response = await fetchCurrentForecast(lat, lon);
    return response.data;
  } catch (e) {
    return e;
  }
};
