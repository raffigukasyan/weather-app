import { FC } from "react";
import { Icon } from "./Icons";

interface IForecastItemProps {
  icon: string;
  label: string;
  value: string | number;
}

export const ForecastItem: FC<IForecastItemProps> = ({
  icon,
  label,
  value,
}) => {
  return (
    <div className="flex gap-x-10 items-center py-6 px-10 bg-gray-100/50 rounded-2xl">
      {<Icon className="w-8 h-8 text-blue-500" type={icon} />}
      <div className="flex flex-col gap-y-2">
        <span className="text-gray-600/50 text-lg font-bold">{label}</span>
        <span className="text-3xl font-bold text-gray-900">{value}</span>
      </div>
    </div>
  );
};
