export type Coordinates = {
  lat: number;
  lon: number;
};

export type WeatherLocationResponse = {
  country: string;
  lat: number;
  local_names: Record<string, string>;
  lon: number;
  name: string;
  state: string;
};

export type WeatherLocation = Pick<
  WeatherLocationResponse,
  "name" | "lat" | "lon"
>;
