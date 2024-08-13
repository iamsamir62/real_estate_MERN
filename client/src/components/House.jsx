import React, { useContext, useState } from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const House = ({ house }) => {
  const {
    images,
    type,
    location,
    address,
    bedrooms,
    bathrooms,
    surface,
    price,
  } = house;

  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <div className="bg-white shadow-1 p-5 rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition ">
      <div className="relative w-full h-[200px] mb-8">
        <img
          src={images}
          alt={address}
          className="absolute inset-0 w-full h-full object-cover rounded-tl-[50px] rounded-tr-none rounded-bl-none rounded-br-[50px]"
        />
      </div>
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-green-500 rounded-full text-white px-2 flex items-center">
          {type}
        </div>
        <div className="bg-violet-300 rounded-full text-white px-3">
          {location}
        </div>
        <div className="bg-red-500 rounded-full text-white px-3">
          {isAvailable ? <p>Available</p> : <p>Booked</p>}
        </div>
      </div>
      <div className="text-lg font-semibold max-w-[260px]">{address}</div>

      <div className="flex gap-x-4 my-4">
        <div className="flex items-center text-slate-500 gap-1">
          <div className="text-[20px]">
            <BiBed />
          </div>
          <div>{bedrooms}</div>
        </div>
        <div className="flex items-center text-slate-500 gap-1">
          <div className="text-[20px]">
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className="flex items-center text-slate-500 gap-1">
          <div className="text-[20px]">
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className="text-lg font-semibold text-violet-600 mb-4">{price}</div>
    </div>
  );
};

export default House;
