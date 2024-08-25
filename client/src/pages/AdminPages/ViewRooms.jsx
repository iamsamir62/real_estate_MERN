import React, { useContext, useEffect } from "react";
import SideBar from "../../components/Admin/SideBar";
import HouseContext from "../../context/HouseContext";

const ViewRooms = () => {
  const { houses, setHouses, loading, setLoading } = useContext(HouseContext);

  useEffect(() => {
    const fetchHouses = async () => {
      setLoading(true);

      try {
        const response = await fetch("http://localhost:5000/room");
        const result = await response.json();
        console.log(result);

        if (response.ok && result.data) {
          setHouses(result.data);
        } else {
          console.error("Error:", result.message || "Failed to fetch houses.");
        }
      } catch (error) {
        console.error("Error fetching houses:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHouses();
  }, [setHouses, setLoading]);

  const handleEdit = (house) => {
    console.log("Edit house:", house);
  };

  const handleDelete = async (id) => {
    console.log("Delete house with id:", id);
    try {
      const response = await fetch(`http://localhost:5000/room/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setHouses((prevHouses) =>
          prevHouses.filter((house) => house._id !== id)
        );
        console.log("House deleted successfully");
      } else {
        console.error("Failed to delete house");
      }
    } catch (error) {
      console.error("Error deleting house:", error);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="h-full w-64">
        <SideBar />
      </div>
      <div className="flex flex-col w-full p-6 bg-gray-100 overflow-auto">
        <h1 className="flex justify-center mb-5 text-2xl font-bold">Rooms</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="w-full table-auto border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-400 p-2">No.</th>
                <th className="border border-gray-400 p-2">Name</th>
                <th className="border border-gray-400 p-2">Price</th>
                <th className="border border-gray-400 p-2">Address</th>
                <th className="border border-gray-400 p-2">Type</th>
                <th className="border border-gray-400 p-2">Bedrooms</th>
                <th className="border border-gray-400 p-2">Bathrooms</th>
                <th className="border border-gray-400 p-2">Status</th>
                <th className="border border-gray-400 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {houses.map((house, index) => (
                <tr key={house._id}>
                  <td className="border border-gray-400 p-2">{index + 1}</td>
                  <td className="border border-gray-400 p-2">
                    {house.ownerName}
                  </td>
                  <td className="border border-gray-400 p-2">{house.price}</td>
                  <td className="border text-center border-gray-400 p-2">
                    {house.address || "N/A"}
                  </td>
                  <td className="border text-center border-gray-400 p-2">
                    {house.type || "N/A"}
                  </td>
                  <td className="border text-center border-gray-400 p-2">
                    {house.bedrooms || "N/A"}
                  </td>
                  <td className="border text-center border-gray-400 p-2">
                    {house.bathrooms || "N/A"}
                  </td>
                  <td
                    className={`border border-gray-400 p-2 ${
                      house.status === "available"
                        ? "text-blue-500"
                        : house.status === "booked"
                        ? "text-red-500"
                        : ""
                    }`}
                  >
                    {house.status || "N/A"}
                  </td>

                  <td className="border border-gray-400 p-2">
                    <div className="flex">
                      <button
                        onClick={() => handleEdit(house)}
                        className="text-blue-500 hover:underline ml-10"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(house._id)}
                        className="text-red-500 hover:underline ml-10"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ViewRooms;
