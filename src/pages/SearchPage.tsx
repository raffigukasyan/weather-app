import { useContext } from "react";
import { Search } from "../components /search";
import { SelectLocationContext } from "../context/SelectLocationProvider";

export const SearchPage = () => {
  const { selectLocation } = useContext(SelectLocationContext);
  console.log(selectLocation, "select location");
  return <Search />;
};
