import React from "react";
import PriceDropDown from "./PriceDropDown";
import LocationDropDOwn from "./LocationDropDOwn";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const handleClick = () => {
    console.log("Search button clicked");
  };

  return (
    <div className="px-[30px] py-4 max-w-[800px] mx-auto mt-4 flex flex-col lg:flex-row justify-between gap-4 relative shadow-lg bg-gray-100 rounded-lg border lg:items-center">
      <LocationDropDOwn />
      <PriceDropDown />

      <button
        onClick={handleClick}
        className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 w-full lg:max-w-[120px] flex justify-center items-center text-lg"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
