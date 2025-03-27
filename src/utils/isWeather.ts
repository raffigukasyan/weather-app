export const isWeather = (dt1: number, dt2: number): boolean => {
  return Math.floor(dt1 / 86400) === Math.floor(dt2 / 86400);
};
