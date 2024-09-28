import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Footermain = () => {
  return (
    <footer className="bg-gray-200 text-gray-500">
      <div className="w-11/12 py-16 md:py-24 mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* About Us Section */}
        <div className="md:col-span-2 flex flex-col gap-5">
          <h1 className="text-lg md:text-xl text-black font-semibold">
            About Us
          </h1>
          <p className="w-full md:w-11/12 text-sm md:text-base">
            We have tested a number of registry fix and clean utilities and
            present our top 3 list on our site for your convenience.
          </p>
          <p className="text-sm">Copyright ©2024 All rights reserved | RoomRental</p>
        </div>

        {/* Newsletter Section */}
        <div className="md:col-span-2 flex flex-col gap-5">
          <h1 className="text-lg md:text-xl text-black font-semibold">
            Newsletter
          </h1>
          <p className="text-sm md:text-base">
            Stay updated with our latest trends
          </p>
          <div className="flex items-center justify-between w-full bg-gray-100 rounded-md shadow-md">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full px-4 py-2 bg-transparent outline-none placeholder:text-xs md:placeholder:text-sm"
            />
            <button className="px-4 py-2 text-2xl text-black bg-indigo-400 rounded-r-md">
              →
            </button>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col gap-5">
          <h1 className="text-lg md:text-xl text-black font-semibold">
            Follow Us
          </h1>
          <h2 className="text-sm md:text-base">Let us be social</h2>
          <div className="flex gap-3 text-gray-500 text-2xl">
            <FaFacebook className="hover:text-blue-500" />
            <FaTwitter className="hover:text-blue-400" />
          </div>
          <h2 className="text-sm md:text-base">OnlineRoomRental@email.com</h2>
        </div>

      </div>
    </footer>
  );
};

export default Footermain;
