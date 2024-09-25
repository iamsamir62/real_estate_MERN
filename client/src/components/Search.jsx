import React from "react";
import PriceDropDown from "./PriceDropDown";
import LocationDropDOwn from "./LocationDropDOwn";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const handleClick = () => {
    console.log("Search button clicked");
  };

  return (
    <div
      className="px-4 py-4   w-7/12 
     mx-auto mt-4 grid grid-cols-2  justify-between
      gap-4 relative shadow-lg bg-gray-100 rounded-lg border lg:items-center"
    >
      <div className="w-full col-span-2 ">
        <LocationDropDOwn />
      </div>
      {/* <div className="w-full col-span-2 ">
        <PriceDropDown />
      </div>

      <button
        onClick={handleClick}
        className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 w-full lg:max-w-[120px] flex justify-center items-center text-lg"
      >
        <FaSearch />
      </button> */}
    </div>
  );
};

export default Search;
