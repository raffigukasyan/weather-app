import { MapPinIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";

export const GeoLoaction = () => {
  const navigate = useNavigate();

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  };

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    navigate(`/?lat=${latitude}&lon=${longitude}`);
  }

  function error() {
    console.log("Unable to retrieve your location");
  }
  return (
    <div
      onClick={handleGetLocation}
      className="h-13 w-13 flex grow-1  justify-center items-center bg-zinc-200/25 rounded-full cursor-pointer"
    >
      <MapPinIcon className="w-6.5 h-6.5 text-zinc-600" />
    </div>
  );
};
