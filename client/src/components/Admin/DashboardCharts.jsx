import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import HouseContext from "../../context/HouseContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Title
);

const DashboardCharts = () => {
  const { houses, users } = useContext(HouseContext);

  // Data for Pie Chart
  const pieData = {
    labels: ["Rooms", "Users"],
    datasets: [
      {
        label: "Number of Items",
        data: [houses.length, users.length],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  // Data for Bar Chart
  const monthlyData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Rooms Added",
        data: [5, 6, 8, 4, 7, 6, 9, 10, 7, 5, 6, 8],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Users Added",
        data: [3, 4, 5, 2, 6, 5, 7, 8, 6, 4, 5, 7],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
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

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Rooms and Users Added",
      },
    },
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <div>
        <h2 className="text-xl font-bold">Overall Distribution</h2>
        <Pie data={pieData} options={pieOptions} />
      </div>
      <div>
        <h2 className="text-xl font-bold">Monthly Trends</h2>
        <Bar data={monthlyData} options={barOptions} />
      </div>
    </div>
  );
};

export default DashboardCharts;
