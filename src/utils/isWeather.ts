export const isWeather = (dt1: number, dt2: number): boolean => {
  return Math.floor(dt1 / 85400) === Math.floor(dt2 / 85400);
};
