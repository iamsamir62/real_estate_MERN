import React, { useContext } from "react";
import SideBar from "../../components/Admin/SideBar";
import { FaUser } from "react-icons/fa";
import Chart from "../../components/Admin/Chart";
import PieChart from "../../components/Admin/PieChart";
import HouseContext from "../../context/HouseContext";

const Dashboard = () => {
  const { users, houses } = useContext(HouseContext);
  const totalusers = users.length;
  const totalRooms = houses.length;

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="h-full w-64">
        <SideBar />
      </div>
      <div className="flex flex-col w-full p-6 bg-gray-100 overflow-auto">
        <div className="flex flex-col lg:flex-row gap-6 mb-5">
          <div className="w-full sm:h-[180px] lg:w-1/2 bg-white border border-gray-300 shadow-lg rounded-lg p-6 flex items-center justify-center">
            <div className="flex flex-col items-center text-gray-800">
              <h1 className="text-2xl font-semibold flex items-center gap-2">
                Total Users <FaUser />
              </h1>
              <h2 className="text-4xl font-bold">{totalusers}</h2>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-white border border-gray-300 shadow-lg rounded-lg p-6 flex items-center justify-center">
            <div className="flex flex-col items-center text-gray-800">
              <h1 className="text-2xl font-semibold flex items-center gap-2">
                Total Rooms <FaUser />
              </h1>
              <h2 className="text-4xl font-bold">{totalRooms}</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 flex bg-white border border-gray-300 shadow-lg rounded-lg p-4 h-[500px] justify-center items-center">
            <Chart />
          </div>
          <div className="flex-1 flex bg-white border border-gray-300 shadow-lg rounded-lg p-4 h-[500px] justify-center items-center overflow-hidden">
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
