import { Icon } from "./ui/Icons";

export const ForecastSidebar = ({ currentForecast }) => {
  return (
    <div className="w-full max-w-lg h-full p-6  bg-[linear-gradient(to_bottom,_#0a224e,_#1c3d77,_#2e5a9c)]">
      <div className="mb-10">
        <p className="text-4xl text-white">{currentForecast.name}</p>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <Icon
            className="w-20 h-20 text-white"
            type={currentForecast?.weather["0"]?.icon}
          />
          <p className="text-white text-6xl">
            {Math.floor(currentForecast?.main?.temp)}° C
          </p>
        </div>
        <p className='text-3xl text-white'>{currentForecast?.weather["0"].description}</p>
      </div>
    </div>
  );
};
