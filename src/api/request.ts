import { api } from "./base";

export const searchLocation = (city: string) => {
  try {
    const response = api.get(
      `/geo/1.0/direct?q=${city}&limit=5&appid=${import.meta.env.VITE_API_KEY}`
    );
    return response;
  } catch (e) {
    throw e;
  }
};

export const getWheather = (lat: string, lon: string) => {
  try {
    const response = api.get(
      `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric`
    );
    return response;
  } catch (e) {
    throw e;
  }
};
