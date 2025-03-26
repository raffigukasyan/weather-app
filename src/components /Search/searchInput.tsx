import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
import { Oval } from "react-loader-spinner";

interface ISearchInput {
  value: string;
  onChange: (val: string) => void;
  loading: boolean;
}

export const SearchInput: FC<ISearchInput> = ({ value, onChange, loading }) => {
  return (
    <div className="flex gap-x-3 bg-zinc-100/30 px-3 py-3 rounded-2xl">
      <MagnifyingGlassIcon className="w-6 h-6 text-zinc-500" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full placeholder:border-none focus:outline-none"
        type="text"
        placeholder="Search location"
      />
      <Oval
        visible={loading}
        height="25"
        width="25"
        color="blue"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
