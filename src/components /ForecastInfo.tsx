import { FC, JSX } from "react";
import { ForecastItem } from "./ui/ForecastItem";

interface ForecastInfoProps {
  wind: number;
  pressure: number;
}

export const ForecastInfo: FC<ForecastInfoProps> = ({
  wind,
  pressure,
}): JSX.Element => {
  return (
    <div className="mb-10">
      <h3 className="text-gray-900 text-3xl mb-6 font-bold">Today overview</h3>
      <div className="grid grid-cols-2 grid-rows-2 items-center gap-4">
        <ForecastItem
          icon="pressure"
          label="Wind Speed"
          value={`${wind} km/h`}
        />
        <ForecastItem icon="rain" label="Rain Chanse" value="dsada" />
        <ForecastItem icon="wind" label="Pressure" value={`${pressure} hpa`} />
        <ForecastItem icon="sun" label="Rain Chanse" value="dsada" />
      </div>
    </div>
  );
};
