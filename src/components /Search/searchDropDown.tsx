import { AnimatePresence, motion } from "motion/react";
import { FC } from "react";

interface ISearchDropdownProps {
  isOpen: boolean;
  locations: { name: string; lat: number; lon: number }[];
  error: string | null;
  onSelect: (location: { name: string; lat: number; lon: number }) => void;
}

export const SearchDropDown: FC<ISearchDropdownProps> = ({
  isOpen,
  locations,
  onSelect,
  error,
}) => {
  return (
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
              onClick={() => onSelect(location)}
              className="cursor-pointer hover:bg-zinc-200/30 p-2 rounded-2xl"
            >
              {location.name}
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
