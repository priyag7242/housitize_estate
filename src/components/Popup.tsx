import React, { useState } from "react";
import { Navigation, MapPin, LocateFixed } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSelectedLocation } from "@/redux/selected-location/selectedLocationSlice";
import { closePopup, openManualPopup } from "@/redux/popup/popupSlice";

const Popup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const getLocation = () => {
    setIsLoading(true);
    setError(null);

    // Get current position using geolocation
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          // geocoding API to convert lat/long to a city name
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const data = await response.json();

          if (data && data.city && data.countryName) {
            console.log(`City: ${data.city}, Country: ${data.countryName}`);
            dispatch(setSelectedLocation(data.countryName));
            dispatch(closePopup());
          } else {
            setError("Unable to get city or country name.");
          }

          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
          setError("Failed to fetch city.");
        } finally {
          setIsLoading(false);
        }
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (err) => {
        setError("Failed to retrieve location.");
        setIsLoading(false);
      }
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white flex flex-col items-start w-full max-w-4xl mx-6 sm:mx-8 md:mx-14 rounded-2xl p-6 shadow-lg">
        {/* Top Div */}
        <div className="w-full text-center">
          <h2 className="text-base text-gray-700 font-semibold mb-4">
            Select your country
          </h2>
        </div>

        {/* Location Div */}
        <div className="flex flex-col md:flex-row w-full items-center justify-between gap-6 mb-12">
          {/* Use Current Location */}
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 shadow-md md:border-none md:shadow-none rounded-lg p-4 text-center w-full md:w-auto">
            <div>
              <Navigation className="h-10 w-10 text-blue-location sm:-translate-y-6 md:-translate-y-6" />
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-bold text-blue-location text-lg">
                Use my current location
              </h3>
              <p className="text-sm text-gray-600 text-center sm:text-left mb-4">
                We&apos;ll need permission to use your device&apos;s location
              </p>
              <button
                onClick={getLocation}
                className="flex items-center gap-2 bg-orange-500 text-white font-medium py-2 px-4 rounded-full hover:bg-orange-600 transition"
                disabled={isLoading}
              >
                <LocateFixed className="h-4 w-4" />
                {isLoading ? "Getting location..." : "USE CURRENT LOCATION"}
              </button>
            </div>
          </div>

          {/* Select Manually */}
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 rounded-lg p-4 text-center w-full md:-translate-x-9 md:w-auto border border-gray-200 shadow-md md:border-none md:shadow-none">
            <div>
              <MapPin className="h-10 w-10 text-blue-location sm:-translate-y-6 md:-translate-y-6" />
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-bold text-blue-location text-lg">
                Select Manually
              </h3>
              <p className="text-sm text-gray-600 text-center sm:text-left mb-4">
                Search by your Country
              </p>
              <button
                className="bg-orange-500 text-white font-medium py-2 px-4 rounded-full hover:bg-orange-600 transition"
                onClick={() => dispatch(openManualPopup())}
              >
                SELECT MANUALLY
              </button>
            </div>
          </div>
        </div>

        {/* Error message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Bottom Div */}
        <div className="w-full text-center">
          <button className="bg-orange-500 text-white font-medium py-2 px-6 rounded-xl hover:bg-orange-600 transition">
            FIND MY HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
