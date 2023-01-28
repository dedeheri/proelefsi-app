import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart({ data }) {
  const options = { maintainAspectRatio: false, responsive: true };
  const chartData = {
    labels: data?.view?.map((x) => x.timestamps),
    datasets: [
      {
        label: "View",
        data: data?.view?.map((x) => x.view),
        borderColor: "rgba(102, 255, 102, 1)",
        backgroundColor: "rgba(102, 255, 102, 0.5)",
      },
      {
        label: "Report",
        data: data?.view?.map((x) => x.report),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return <Line data={chartData} options={options} width={1400} height={900} />;
}

export default Chart;
