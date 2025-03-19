import { getCurrentForecast } from "../../api/request";

export const useFetchCurrentForecast = async (lat: string, lon: string) => {
  try {
    const response = await getCurrentForecast(lat, lon);
    return response.data;
  } catch (e) {
    return e;
  }
};
