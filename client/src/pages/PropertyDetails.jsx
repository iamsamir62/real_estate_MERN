import React, { useContext, useState } from "react";
import HouseContext from "../context/HouseContext";
import { useParams } from "react-router-dom";

const PropertyDetails = () => {
  const { houses } = useContext(HouseContext);
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const house = houses.find((house) => house.id === parseInt(id));

  if (!house) {
    return <div>Loading...</div>;
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
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

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected Preview"
              className="max-w-full max-h-full rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-400 transition-colors"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Room Details */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Room Details</h1>
        <h2 className="text-2xl font-semibold text-[#A0A0A0] mb-6">
          {house.desc}
        </h2>
        <div className="text-lg leading-8">
          <p className="text-xl font-medium text-gray-700 mb-2">{house.name}</p>
          <p className="text-lg text-gray-600">{house.type}</p>
          <p className="bg-green-500 text-white rounded-full px-3 py-1 inline-block mt-4 mb-2">
            {house.address}
          </p>
          <p className="text-lg text-gray-600 flex gap-5">
            <h1 className="text-xl font-serif">Owner name :</h1>
            <p className="text-xl font-serif font-semibold bg-blue-300 rounded-full px-3 py-1 mb-0">
              {house.owner}
            </p>
          </p>
          <p className="text-xl font-bold bg-red-500 rounded-full px-3 py-1 inline-block text-gray-800 mt-4">
            {house.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
