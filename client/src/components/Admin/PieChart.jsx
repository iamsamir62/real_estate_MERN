import React, { useContext } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import HouseContext from "../../context/HouseContext"; // Import HouseContext

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = () => {
  const { houses, users } = useContext(HouseContext); // Get houses from context

  // Count total number of rooms and users
  const totalRooms = houses.length;
  const totalUsers = users.length;

  // Prepare data for the chart
  const data = {
    labels: ["Rooms", "Users"],
    datasets: [
      {
        label: "Number of Items",
        data: [totalRooms, totalUsers],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Distribution of Rooms and Users",
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
