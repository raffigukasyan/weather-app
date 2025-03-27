export interface IForecastFiveDays {
  city: 
}

export interface IForecastDay {
  dt: number;
  dt_txt: string;
  base?: string;
  visibility?: number;
  timezone: number;
  id: number;
  name: string;
  cod?: number;
  pop: number;

  sys: {
    pod?: string;
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };

}
