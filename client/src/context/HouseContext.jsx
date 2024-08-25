import React, { useState, useEffect, createContext } from "react";

const HouseContext = createContext();

export const HouseProvider = ({ children }) => {
  const [houses, setHouses] = useState([]);
  const [locations, setLocations] = useState("any");
  const [price, setPrice] = useState("any");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [bookingUser, setBookingUser] = useState([]);

  return (
    <HouseContext.Provider
      value={{
        houses,
        setHouses,
        locations,
        setLocations,
        price,
        setPrice,
        loading,
        setLoading,
        users,
        setUsers,
        bookingUser,
        setBookingUser,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContext;
