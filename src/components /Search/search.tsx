import { useState } from "react";
import { useSearchLocation } from "../../hooks/fetch/useSearchLocation.tsx";

import { SearchInput } from "./searchInput.tsx";
import { SearchDropDown } from "./searchDropDown.tsx";
export const Search = () => {
  const [value, setValue] = useState<string>("");

  const { isOpen, locations, loading, error, handleSelect } =
    useSearchLocation(value);

  console.log("render");

  return (
    <div className="relative">
      <SearchInput
        value={value}
        onChange={(val) => setValue(val)}
        loading={loading}
      />
      <SearchDropDown
        isOpen={isOpen}
        locations={locations}
        error={error}
        onSelect={handleSelect}
      />
    </div>
  );
};
