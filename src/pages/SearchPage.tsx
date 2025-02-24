import { Search } from "../components /search";
import { SelectLocationProvicer } from "../context/SelectLocationProvider";

export const SearchPage = () => {
  return (
    <SelectLocationProvicer>
      <Search />
    </SelectLocationProvicer>
  );
};
