import React, { useState } from "react";
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
    status,
    price,
  } = house;

  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <div className="bg-white shadow-1 p-5 rounded-tl-[0px] w-full max-w-[362px] mx-auto cursor-pointer hover:shadow-2xl transition flex flex-col">
      <div className="relative w-full h-[220px] mb-8 flex-shrink-0">
        <img
          src={`http://localhost:5000/${images[0]}`} // Assuming `images` is an array, use the first image
          className="absolute inset-0 w-full h-full object-cover rounded-tl-[50px] rounded-tr-none rounded-bl-none rounded-br-[50px]"
        />
      </div>
      <div className="mb-2 flex gap-x-2 text-sm flex-shrink-0">
        <div className="bg-green-500 rounded-full text-white px-2 flex items-center">
          {type}
        </div>
        <div className="bg-violet-300 rounded-full text-white px-3">
          {/* Render location as a formatted string */}
          {/* {location.latitude}, {location.longitude} */}
        </div>
        <div className={`${status === 'booked' ? 'bg-red-500' : 'bg-blue-500'} rounded-full text-white px-3`}>
          {<p>{status}</p>}
        </div>
      </div>
      <div className="text-lg items-center gap-3 font-semibold max-w-[560px] flex">
        {address}

        {type === "Flat" && (
          <div className="flex gap-x-4 my-2 flex-shrink-0">
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
        )}
      </div>

      <div className="text-lg font-semibold text-violet-600 mb-4 flex-shrink-0">
        ${price} 
      </div>
    </div>
  );
};

export default House;
