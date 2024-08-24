import React, { useContext, useState } from "react";
import {
  RiMapPinLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiGpsLine,
} from "react-icons/ri";
import { FaLaptopHouse } from "react-icons/fa";
import { Menu } from "@headlessui/react";
import HouseContext from "../context/HouseContext";
import "../../src/index.css";

const LocationDropDOwn = () => {
  const { locations, setHouses } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Select Your Place");
  const [currentLocation, setCurrentLocation] = useState(null);

  const handleLocationSelect = (location) => {
    // setSelectedLocation(
    //   `${location.address}, ${location.city}, ${location.country}`
    // );
    setIsOpen(false);
  };

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          setCurrentLocation({ latitude, longitude });
          console.log("setCurrentLocation", { latitude, longitude });

          // Fetch nearby rooms based on the current location
          fetchNearbyRooms(latitude, longitude);

          setSelectedLocation("Current Location");
          setIsOpen(false);
        },
        (error) => {
          console.error("Error fetching current location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const fetchHouses = async () => {
    try {
      const response = await fetch("http://localhost:5000/room");
      const result = await response.json();
      if (response.ok && result.data) {
        setHouses(result.data);
        setIsOpen(false);

        setSelectedLocation("All Location");
      } else {
        console.error("Error:", result.message || "Failed to fetch houses.");
      }
    } catch (error) {
      console.error("Error fetching houses:", error);
    }
  };


  const fetchNearbyRooms = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `http://localhost:5000/room/nearbyrooms?latitude=${latitude}&longitude=${longitude}`
      );
      const result = await response.json();

      if (response.ok) {
        const nearby = result.data;
        console.log("nearby", nearby);

        setHouses(nearby); // Update this if 'result.data' structure is different
        console.log("Nearby rooms fetched:", nearby);
      } else {
        console.error(
          "Error fetching nearby rooms:",
          result.message || "Failed to fetch rooms."
        );
      }
    } catch (error) {
      console.error("Error fetching nearby rooms:", error);
    }
  };

  // Ensure locations is always an array
  const safeLocations = Array.isArray(locations) ? locations : [];

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
        <Menu.Items className="dropdown-menu absolute w-full bg-white shadow-lg rounded-md mt-2 z-19">
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
          {/* {safeLocations.length > 0 ? (
            safeLocations.map((location) => (
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
          ) : ( */}
            <div className="px-4 py-2 text-sm 
             text-gray-700"
            
                >


                <button
                  className={`${"hover:bg-blue-500 hover:text-white px-2 py-2 text-gray-900"
                    } group flex rounded-md items-center w-full gap-3 px-2 py-2 text-sm`}
                  onClick={() => fetchHouses()}
                >

              < FaLaptopHouse size={18} className="mr-2" />

                  All rooms
                </button>
            </div>
          {/* )} */}
        </Menu.Items>
      )}
    </Menu>
  );
};

export default LocationDropDOwn;
