import { Search } from "../Search/search";
import { GeoLoaction } from "../geolocation";
export const Control = () => {
  return (
    <div className="py-10 px-12 basis-[30%] bg-white">
      <div className="w-full flex justify-between gap-x-6 items-center">
        <Search />
        <GeoLoaction />
      </div>
    </div>
  );
};
