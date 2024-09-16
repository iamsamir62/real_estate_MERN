import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import House from "./House";
import HouseContext from "../context/HouseContext";

const HouseList = () => {
  const { houses, setHouses, loading, setLoading } = useContext(HouseContext);





  useEffect(() => {
    const fetchHouses = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/room");
        const result = await response.json();
        if (response.ok && result.data) {
          setHouses(result.data);
        } else {
          console.error("Error:", result.message || "Failed to fetch houses.");
        }
      } catch (error) {
        console.error("Error fetching houses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHouses();
  }, [setHouses, setLoading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="mb-20 w-11/12 mx-auto">
      <div className="container-lg mx-auto">
        <div className="grid  md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-x-0 gap-4 lg:gap-14">
          {houses.length > 0 ? (
            houses.map((house) => (
              <Link to={`/property/${house._id}`} key={house._id}>
                <House house={house} />
              </Link>
            ))
          ) : (
            <div>No rooms available</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
