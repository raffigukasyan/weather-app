import { useEffect, useState } from "react";
import {  searchLocation } from "../../api/request";

export const useSearchLocation = (value: string) => {
  const [locations, setLocations] = useState<unknown>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const fetchSearchLocation = async () => {
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
    if (value.length < 2) {
      setIsOpen(false);
      setLoading(false);
      return;
    }
    setLoading(true);
    const handle = setTimeout(() => {
      fetchSearchLocation();
    }, 2000);
    return () => clearTimeout(handle);
  }, [value]);

  //const handleSelect = (location) => {
  //  const { lat, lon } = location;
  //  return redirect(`/weather/lat=${lat}&lon=${lon}`);
  //  //try {
  //  //  const { data } = await getWheather(lat, lon);
  //  //  console.log(data, " data");
  //  //  setSelectLocation(data});
  //  //  setIsOpen(false);
  //  //} catch (e) {
  //  //  console.log(e);
  //  //}
  //};

  return { locations, loading, error, isOpen };
};
