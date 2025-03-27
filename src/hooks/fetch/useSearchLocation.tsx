import { useEffect, useState } from "react";
import { searchLocation } from "../../api/request";
import { useNavigate } from "react-router";

import { WeatherLocation } from "@/types/shared/locations";

export const useSearchLocation = (value: string) => {
  const [locations, setLocations] = useState<WeatherLocation[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const navigate = useNavigate();

  const fetchSearchLocation = async (value: string) => {
    try {
      const response = await searchLocation(value);

      const data = response.data.map(
        ({ local_names, country, ...rest }) => rest
      );
      setLocations([...data]);
    } catch (e) {
      setError("Нету данных");
    } finally {
      setIsOpen(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (value.length < 2) {
      setIsOpen(false);
      setLoading(false);
      return;
    }
    setLoading(true);
    const handle = setTimeout(() => {
      fetchSearchLocation(value);
    }, 2000);
    return () => clearTimeout(handle);
  }, [value]);

  const handleSelect = (location: WeatherLocation) => {
    const { lat, lon } = location;
    navigate(`/?lat=${lat}&lon=${lon}`);
    setIsOpen(false);
  };

  return { locations, loading, error, isOpen, handleSelect };
};
