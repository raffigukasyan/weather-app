import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useSearchLocation } from "../hooks/fetch/useSearchLocation";

export const Search = () => {
  const [value, setValue] = useState<string>("");

  const { isOpen, locations, loading, error } = useSearchLocation(value);

  console.log("render");
  return (
    <div className="relative">
      <div className="flex gap-x-3 bg-zinc-200/30 px-3 py-3 rounded-xl">
        <MagnifyingGlassIcon className="w-6 h-6 text-zinc-500" />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full placeholder:border-none focus:outline-none"
          type="text"
          placeholder="Search location"
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ display: "none", opacity: 0 }}
            animate={{ display: "flex", opacity: 1 }}
            exit={{ display: "none", opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="top-13 flex-col gap-y-2  px-3 py-2 left-0 absolute w-full bg-zinc-200/10 rounded-xl"
          >
            {error && <span>{error}</span>}
            {locations?.map((location) => (
              <div
                //onClick={() => handleSelect(location)}
                className="cursor-pointer hover:bg-zinc-200/30 p-2 rounded-2xl"
              >
                {location.name}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
