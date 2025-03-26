import { useContext } from "react";
import { SelectLocationContext } from "../../context/SelectLocationProvider";

export const MainInfo = () => {
  const { selectLocation } = useContext(SelectLocationContext);

  console.log(selectLocation, "sel");
  return <div className=" basis-full h-full bg-gray-400/10">MAIN INFO</div>;
};
