import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";

export const Sidebar = () => {
  return (
    <div
      className={
        "w-[300px] h-full flex flex-col gap-y-20 bg-slate-200 px-5 py-8"
      }
    >
      <h2 className="text-4xl text-blue-500 font-bold">Weather App</h2>
      <nav className="flex flex-col gap-y-8">
        <Link to={"/"} className="flex items-center gap-x-5">
          <HomeIcon className="w-6 h-6" />
          <span className="text-lg">Home</span>
        </Link>
        <Link to={"search"} className="flex items-center gap-x-5">
          <MagnifyingGlassIcon className="w-6 h-6" />
          <span className="text-lg">Search</span>
        </Link>
      </nav>
    </div>
  );
};
