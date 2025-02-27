export const useDataChart = (data) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    }

    return date.toLocaleDateString("en-EN", { weekday: "long" });
  };

  const dataChart = data.map((el) => {
    return {
      day: formatDate(el.dt_txt),
      temp: Math.floor(el.main.temp),
    };
  });

  return dataChart;
};
