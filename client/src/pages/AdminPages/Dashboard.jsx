import React, { useContext, useEffect, useState } from "react";
import SideBar from "../../components/Admin/SideBar";
import { FaUser } from "react-icons/fa";
import HouseContext from "../../context/HouseContext";
import BookedUsers from "./bookedusers";

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalRooms, setTotalRooms] = useState(0);

  const { setUsers, setHouses } = useContext(HouseContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await fetch("http://localhost:5000/auth/users");

        if (!usersResponse.ok) {
          console.error(
            "Failed to fetch users. Status:",
            usersResponse.status,
            usersResponse.statusText
          );
          return;
        }

        const usersData = await usersResponse.json();
        console.log("Users API response:", usersData);

        if (usersData && Array.isArray(usersData.data)) {
          setTotalUsers(usersData.data.length);
          setUsers(usersData.data);
        } else {
          console.error("Unexpected users data format:", usersData);
        }

        const roomsResponse = await fetch("http://localhost:5000/room");

        if (!roomsResponse.ok) {
          console.error(
            "Failed to fetch rooms. Status:",
            roomsResponse.status,
            roomsResponse.statusText
          );
          return;
        }

        const roomsData = await roomsResponse.json();
        console.log("Rooms API response:", roomsData);

        if (roomsData && Array.isArray(roomsData.data)) {
          setTotalRooms(roomsData.data.length);
          setHouses(roomsData.data);
        } else {
          console.error("Unexpected rooms data format:", roomsData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setUsers, setHouses]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="h-full w-64 bg-gray-800 text-white">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full p-6 bg-gray-100 overflow-auto">
        <div className="flex flex-col lg:flex-row gap-6 mb-5">
          <div className="w-full lg:w-1/2 bg-white border border-gray-300 shadow-lg rounded-lg p-6 flex flex-col items-center">
            <div className="flex flex-col items-center text-gray-800 mb-4">
              <h1 className="text-2xl font-semibold flex items-center gap-2">
                Total Users <FaUser />
              </h1>
              <h2 className="text-4xl font-bold">{totalUsers}</h2>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-white border border-gray-300 shadow-lg rounded-lg p-6 flex flex-col items-center">
            <div className="flex flex-col items-center text-gray-800 mb-4">
              <h1 className="text-2xl font-semibold flex items-center gap-2">
                Total Rooms <FaUser />
              </h1>
              <h2 className="text-4xl font-bold">{totalRooms}</h2>
            </div>
          </div>
        </div>

        <div className="w-full bg-white border border-gray-300 shadow-lg rounded-lg p-4">
          <BookedUsers />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
