import React, { useContext, useState } from "react";
import HouseContext from "../context/HouseContext";
import { useParams } from "react-router-dom";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const PropertyDetails = () => {
  const { houses } = useContext(HouseContext);
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const house = houses.find((house) => house.id === parseInt(id));

  if (!house) {
    return <div>Loading...</div>;
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleBookNowClick = () => {
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    setIsBookingModalOpen(false);
  };

  return (
    <div className="container max-w-[1400px] mx-auto p-8 mt-8 shadow-2xl bg-white rounded-lg border border-gray-300 grid grid-cols-1 sm:grid-cols-2 gap-10">
      {/* Image Grid */}
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mb-8">
        {house.images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={image}
              alt={`${house.name} ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeImageModal}
        >
          <div
            className="relative bg-white p-4 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Selected Preview"
              className="max-w-full max-h-full rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-400 transition-colors"
              onClick={closeImageModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Room Details</h1>
        <h2 className="text-2xl font-semibold text-[#A0A0A0] mb-6">
          {house.desc}
        </h2>
        <div className="text-lg leading-8">
          <div className="text-xl font-medium text-gray-700 mb-2">
            {house.name}
          </div>

          {house.type === "Flat" && (
            <div className="flex gap-4 text-xl">
              <div className="text-gray-600">{house.type}</div>
              <div className="flex items-center text-slate-500 gap-1">
                <div className="text-[20px]">
                  <BiBed />
                </div>
                <div>{house.bedrooms}</div>
              </div>
              <div className="flex items-center text-slate-500 gap-1">
                <div className="text-[20px]">
                  <BiBath />
                </div>
                <div>{house.bathrooms}</div>
              </div>
              <div className="flex items-center text-slate-500 gap-1">
                <div className="text-[20px]">
                  <BiArea />
                </div>
                <div>{house.surface}</div>
              </div>
            </div>
          )}

          <div className="bg-green-500 text-white rounded-full px-3 py-1 inline-block mt-4 mb-2">
            {house.address}
          </div>
          <div className="text-lg text-gray-600 flex gap-5 items-center">
            <h1 className="text-xl font-serif">Owner name:</h1>
            <div className="text-xl font-mono font-semibold bg-blue-300 rounded-full text-black px-3 py-1">
              {house.owner}
            </div>
          </div>
          <div className="text-xl font-bold bg-red-500 rounded-full px-3 py-1 inline-block text-gray-800 mt-4">
            {house.price}
          </div>
        </div>
        <div className="mt-8 bg-black text-white inline-block rounded-full px-4 py-3">
          <button className="text-2xl font-mono" onClick={handleBookNowClick}>
            Book Now
          </button>
        </div>
      </div>

      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="bg-gray-400 text-white px-4 py-2 rounded-md"
                  onClick={closeBookingModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
