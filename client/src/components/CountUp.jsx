import React from "react";
import CountUp from "react-countup";

const CountUps = () => {
  return (
    <div>
    <div className="bg-gradient-to-r from-[#7b5eea] to-[#56c1ff]">
      {/* Grid Container */}
      <div className="w-11/12 md:w-9/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 md:py-24 text-center">
        <div>
          <h1 className="text-3xl md:text-4xl text-white font-semibold">
            <CountUp delay={2} end={890} />
          </h1>
          <h3 className="text-white mt-2">Rooms Rented</h3>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl text-white font-semibold">
            <CountUp delay={2} end={590} />
          </h1>
          <h3 className="text-white mt-2">Satisfied Clients</h3>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl text-white font-semibold">
            <CountUp delay={2} end={950} />
          </h1>
          <h3 className="text-white mt-2">Available Rooms</h3>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl text-white font-semibold">
            <CountUp delay={2} end={1120} />
          </h1>
          <h3 className="text-white mt-2">Verified Property Managers</h3>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default CountUps;
