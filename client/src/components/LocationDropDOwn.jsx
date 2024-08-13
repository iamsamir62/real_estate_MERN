import React, { useContext, useState } from "react";
import {
  RiMapPinLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiGpsLine,
} from "react-icons/ri";
import { Menu } from "@headlessui/react";
import HouseContext from "../context/HouseContext";
import "../../src/index.css";

const LocationDropDOwn = () => {
  const { locations } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Select Your Place");
  const [currentLocation, setCurrentLocation] = useState(null);

  const handleLocationSelect = (location) => {
    setSelectedLocation(
      `${location.address}, ${location.city}, ${location.country}`
    );
    setIsOpen(false); // Close the dropdown after selecting a location
  };

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // You can use these coordinates to fetch or set the current location details
          setCurrentLocation({ latitude, longitude }); // Example of setting the current location
          setSelectedLocation("Current Location"); // Display "Current Location" as selected
          setIsOpen(false); // Close the dropdown after selecting
        },
        (error) => {
          console.error("Error fetching current location:", error);
          // Handle errors here
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button className="dropdown_btn" onClick={() => setIsOpen(!isOpen)}>
        <RiMapPinLine className="dropdown-icon-primary" />
        <div className="text-[13px]">{selectedLocation}</div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      {isOpen && (
        <Menu.Items className="dropdown-menu absolute w-full bg-white shadow-lg rounded-md mt-2 z-10">
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-blue-500 text-white" : "text-gray-900"
                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                onClick={handleUseCurrentLocation}
              >
                <RiGpsLine className="mr-2" />
                Use Current Location
              </button>
            )}
          </Menu.Item>
          {locations && locations.length > 0 ? (
            locations.map((location) => (
              <Menu.Item key={location.id}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    onClick={() => handleLocationSelect(location)}
                  >
                    {location.address}, {location.city}, {location.country}
                  </button>
                )}
              </Menu.Item>
            ))
          ) : (
            <div className="px-4 py-2 text-sm text-gray-700">
              No locations available
            </div>
          )}
        </Menu.Items>
      )}
    </Menu>
  );
};

export default LocationDropDOwn;
