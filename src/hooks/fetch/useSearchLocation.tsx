import { useEffect, useState } from "react";
import { searchLocation } from "../../api/request";

export const useSearchLocation = (value: string) => {
  const [locations, setLocations] = useState<unknown>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const fetchSearchLocation = async () => {
    if (value.length < 2) {
      setIsOpen(false);
      return;
    }
    setLoading(true);
    try {
      const response = await searchLocation(value);
      const data = response.data.map((el) => {
        const { local_names, ...newData } = el;
        return newData;
      });
      setLocations([...data]);
    } catch (e) {
      setError("Нету данных");
      throw e;
    } finally {
      setIsOpen(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (value.length < 2) return;
    setLoading(true);
    const handle = setTimeout(() => {
      fetchSearchLocation();
    }, 2000);
    return () => clearTimeout(handle);
  }, [value]);

  const handleSelect = () => {
    setIsOpen(false);
  };

  return { locations, loading, error, isOpen, handleSelect };
};
