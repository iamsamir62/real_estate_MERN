import React, { useContext } from "react";
import SideBar from "../../components/Admin/SideBar";
import HouseContext from "../../context/HouseContext";

const ViewRooms = () => {
  const { houses } = useContext(HouseContext);

  const handleEdit = (house) => {
    console.log("Edit house:", house);
  };

  const handleDelete = (id) => {
    console.log("Delete house with id:", id);
  };

  return (
    <div className="flex h-screen">
      <SideBar />

      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-4xl flex justify-center font-mono mb-6">
          Room Details
        </h1>

        <div className="bg-white shadow-md rounded p-4">
          <table className="w-full table-auto border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-400 p-2">Id</th>
                <th className="border border-gray-400 p-2">Type</th>
                <th className="border border-gray-400 p-2">Owner</th>
                <th className="border border-gray-400 p-2">Address</th>
                <th className="border border-gray-400 p-2">Phone</th>
                <th className="border border-gray-400 p-2">Bedrooms</th>
                <th className="border border-gray-400 p-2">Bathrooms</th>
                <th className="border border-gray-400 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {houses.map((house) => (
                <tr key={house.id}>
                  <td className="border border-gray-400 p-2">{house.id}</td>
                  <td className="border border-gray-400 p-2">{house.type}</td>
                  <td className="border border-gray-400 p-2">{house.owner}</td>
                  <td className="border border-gray-400 p-2">
                    {house.address}
                  </td>
                  <td className="border border-gray-400 p-2">
                    {house.phone || "N/A"}
                  </td>
                  {house.type === "Flat" ? (
                    <>
                      <td className="border border-gray-400 p-2">
                        {house.bedrooms || "N/A"}
                      </td>
                      <td className="border border-gray-400 p-2">
                        {house.bathrooms || "N/A"}
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="border border-gray-400 p-2">N/A</td>
                      <td className="border border-gray-400 p-2">N/A</td>
                    </>
                  )}
                  <td className="border border-gray-400 p-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(house)}
                        className="text-blue-500 hover:underline"
                      >
                        Edit
                      </button>
                      <span>/</span>
                      <button
                        onClick={() => handleDelete(house.id)}
                        className="text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewRooms;
