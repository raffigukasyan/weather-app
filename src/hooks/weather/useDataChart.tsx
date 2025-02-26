export const useDataChart = (data) => {
  const dataChart = data.map((el) => {
    return {
      day: el.dt_txt,
      temp: el.main.temp,
    };
  });

  return dataChart;
};
