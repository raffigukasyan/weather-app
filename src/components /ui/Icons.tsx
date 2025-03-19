import { SunIcon } from "@heroicons/react/24/outline";
import { PressureIcon } from "../Icons/PressureIIcon";
import { FC, JSX } from "react";
import { RainIcon } from "../Icons/RainIcon";
import { WindIcon } from "../Icons/WindIcon";

import { SkyIcon } from "../Icons/SkyIcon";
import { FewClouds } from "../Icons/FewCloudsIcon";
import { CloudIcon } from "../Icons/CloudIcon";
import { BrokenClouds } from "../Icons/BrokenClouds";
import { ShowerRain } from "../Icons/ShowerRain";
import { Rain } from "../Icons/Rain";
import { Thunderstorm } from "../Icons/Thunderstorm";
import { Snow } from "../Icons/Snow";
import { Mist } from "../Icons/Mist";

interface IIconProps {
  type: string;
  className?: string;
}

export const Icon: FC<IIconProps> = ({ type, className }): JSX.Element => {
  return {
    pressure: <PressureIcon className={className} />,
    sun: <SunIcon className={className} />,
    rain: <RainIcon className={className} />,
    wind: <WindIcon className={className} />,
    "01d": <SkyIcon className={className} />,
    "02d": <FewClouds className={className} />,
    "03d": <CloudIcon className={className} />,
    "04d": <BrokenClouds className={className} />,
    "09d": <ShowerRain className={className} />,
    "10d": <Rain className={className} />,
    "11d": <Thunderstorm className={className} />,
    "13d": <Snow className={className} />,
    "50d": <Mist className={className} />,
  }[type];
};
