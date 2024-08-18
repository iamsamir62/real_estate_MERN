import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import SideBar from "../../components/Admin/SideBar";

const AddRooms = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Address: "",
      bedrooms: "",
      bathrooms: "",
      propertyType: "",
    },
  });

  const watchPropertyType = watch("propertyType");
  const [photos, setPhotos] = React.useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 4) {
      alert("You can only upload up to 4 photos.");
      return;
    }
    setPhotos(files);
  };

  const onSubmit = (data) => {
    console.log("Data submitted:", data);
  };
  useEffect(() => {
    setValue("Address", "Butwal");
  }, [setValue]);

  return (
    <div className="flex gap-4 h-screen  bg-gray-100">
      <div className="h-full w-64">
        <SideBar />
      </div>
      <div className="container mx-auto p-3 bg-white shadow-md rounded-lg">
        <div className="flex justify-center mb-0">
          <h1 className="text-4xl font-mono text-gray-800">Add Room</h1>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-6 items-center">
            <label className="text-lg font-semibold text-gray-700">Type:</label>
            <div className="flex gap-4">
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  value="Room"
                  {...register("propertyType", {
                    required: "Property type is required",
                  })}
                  className="mr-2 accent-blue-500"
                />
                Room
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="radio"
                  value="Flat"
                  {...register("propertyType", {
                    required: "Property type is required",
                  })}
                  className="mr-2 accent-blue-500"
                />
                Flat
              </label>
            </div>
            {errors.propertyType && (
              <p className="text-red-500">{errors.propertyType.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label
              htmlFor="Address"
              className="text-lg font-semibold text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="Address"
              {...register("Address", { required: "Address is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.Address && (
              <p className="text-red-500">{errors.Address.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label
              htmlFor="Owner"
              className="text-lg font-semibold text-gray-700"
            >
              Owner
            </label>
            <input
              type="text"
              id="owner"
              {...register("Owner", { required: "Owner is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.Owner && (
              <p className="text-red-500">{errors.Owner.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label
              htmlFor="Phone"
              className="text-lg font-semibold text-gray-700"
            >
              Phone
            </label>
            <input
              type="number"
              id="phone"
              {...register("Phone", { required: "Phone no is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.Phone && (
              <p className="text-red-500">{errors.Phone.message}</p>
            )}
          </div>
          {watchPropertyType === "Flat" && (
            <>
              <div className="space-y-1">
                <label
                  htmlFor="bedrooms"
                  className="text-lg font-semibold text-gray-700"
                >
                  Bed-Rooms
                </label>
                <input
                  type="number"
                  id="bedrooms"
                  min="1"
                  {...register("bedrooms", {
                    required: "Number of bedrooms is required",
                    min: { value: 1, message: "Minimum number is 1" },
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {errors.bedrooms && (
                  <p className="text-red-500">{errors.bedrooms.message}</p>
                )}
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="bathrooms"
                  className="text-lg font-semibold text-gray-700"
                >
                  Bath-Rooms
                </label>
                <input
                  type="number"
                  id="bathrooms"
                  min="1"
                  {...register("bathrooms", {
                    required: "Number of bathrooms is required",
                    min: { value: 1, message: "Minimum number is 1" },
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {errors.bathrooms && (
                  <p className="text-red-500">{errors.bathrooms.message}</p>
                )}
              </div>
            </>
          )}
          <div className="space-y-2">
            <label
              htmlFor="photos"
              className="text-lg font-semibold text-gray-700"
            >
              Photos of the Rooms
            </label>
            <input
              type="file"
              id="photos"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              multiple
              onChange={handleFileChange}
            />
            {photos.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {photos.map((file, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${index}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-1"
                      onClick={() =>
                        setPhotos(photos.filter((_, i) => i !== index))
                      }
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Add Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRooms;
