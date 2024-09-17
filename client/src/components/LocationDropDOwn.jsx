import React, { useContext, useState } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Box,
  CircularProgress,
} from "@mui/material";
import { FaLaptopHouse } from "react-icons/fa";
import { RiGpsLine } from "react-icons/ri";
import HouseContext from "../context/HouseContext";

const LocationDropDOwn = () => {
  const { locations, setHouses } = useContext(HouseContext);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUseCurrentLocation = () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchNearbyRooms(latitude, longitude);
          setSelectedLocation("Current Location");
          setLoading(false);
        },
        (error) => {
          console.error("Error fetching current location:", error);
          setLoading(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  };

  const fetchHouses = async () => {
    try {
      const response = await fetch("http://localhost:5000/room");
      const result = await response.json();
      if (response.ok && result.data) {
        setHouses(result.data);
        setSelectedLocation("All Rooms");
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
        setHouses(nearby);
      } else {
        console.error("Error fetching nearby rooms:", result.message || "Failed to fetch rooms.");
      }
    } catch (error) {
      console.error("Error fetching nearby rooms:", error);
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="location-select-label">Select Location</InputLabel>
        <Select
          labelId="location-select-label"
          id="location-select"
          value={selectedLocation}
          label="Select Location"
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <MenuItem value="use-current-location" onClick={handleUseCurrentLocation}>
            <RiGpsLine className="mr-2" /> Use Current Location
          </MenuItem>
          <MenuItem value="all-rooms" onClick={fetchHouses}>
            <FaLaptopHouse className="mr-2" /> All Rooms
          </MenuItem>
          {/* Add static locations if needed */}
        </Select>
      </FormControl>
      {loading && <CircularProgress />}
    </Box>
  );
};

export default LocationDropDOwn;
