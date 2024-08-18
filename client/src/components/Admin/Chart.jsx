import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import HouseContext from "../../context/HouseContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const { houses, users } = useContext(HouseContext);

  // Example static data for monthly statistics
  // Replace this with dynamic data if available
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
        data: [
          5,
          6,
          8,
          4,
          7,
          6,
          9,
          10,
          7,
          5,
          6,
          8, // Example data for each month
        ],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Users Added",
        data: [
          3,
          4,
          5,
          2,
          6,
          5,
          7,
          8,
          6,
          4,
          5,
          7, // Example data for each month
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
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
        text: "Monthly Rooms and Users Added",
      },
    },
  };

  return <Bar data={monthlyData} options={options} />;
};

export default Chart;
