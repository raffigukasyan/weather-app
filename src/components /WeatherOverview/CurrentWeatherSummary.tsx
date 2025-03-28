import { Icon } from "../ui/Icons";

export const CurretWeatherSummary = ({ forecast }) => {
  console.log(forecast, "for");
  return (
    <div className="flex flex-col items-start gap-y-10">
      <Icon className="w-60 h-50" type={forecast.weather[0].icon} />
      <p className='text-8xl font-light'>{Math.floor(forecast.main.temp)}&deg;<sup className='text-6xl'>C</sup></p>
      <div>
        <p className='text-2xl font-light'>{forecast.name}, </p>
      </div>
    </div>
  );
};
