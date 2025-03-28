import { JSX } from "react";
import { WrapperItem } from "../WrapperItem";
import { formatDate } from "@/utils/formatDate";
import { Icon } from "../ui/Icons";

interface WeekItemProps {
  day: string;
  temp: number;
  icon: string;
}

export const WeekItem = ({ day, temp, icon }: WeekItemProps): JSX.Element => {
  return (
    <WrapperItem className="gap-y-3">
      <p>{formatDate(day).slice(0, 3)}</p>
      <Icon className="w-12 h-12" type={icon} />
      <p>{Math.floor(temp)}&deg;</p>
    </WrapperItem>
  );
};
