import { createContext, ReactNode, useState } from "react";

export const SelectLocationContext = createContext({});

export const SelectLocationProvicer = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectLocation, setSelectLocation] = useState({ name: "ok" });
  return (
    <SelectLocationContext.Provider
      value={{ selectLocation, setSelectLocation }}
    >
      {children}
    </SelectLocationContext.Provider>
  );
};
