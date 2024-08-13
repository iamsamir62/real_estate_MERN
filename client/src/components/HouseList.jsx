import React, { useContext } from "react";
import { Link } from "react-router-dom";
import House from "./House";
import HouseContext from "../context/HouseContext";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="mb-20">
      <div className="container-lg mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-x-0 gap-4 lg:gap-14 ">
          {houses.length > 0 ? (
            houses.map((house) => (
              <Link to={`/property/${house.id}`} key={house.id}>
                <House house={house} />
              </Link>
            ))
          ) : (
            <div>No houses available</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
