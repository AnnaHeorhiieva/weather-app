import React from "react";
import { Bar } from "react-chartjs-2";

import { options } from "utils/configs/hourly-chart-settings";
import { configureChartData } from "utils/helpers/configure-chart-data";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

interface HourlyChartProps {
  dataX: number[];
  dataY: number[];
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function HourlyChart({ dataX, dataY }: HourlyChartProps): JSX.Element {
  const data = configureChartData(dataX, dataY);
  return <Bar options={options} data={data} updateMode="show" height="100%" />;
}

export default HourlyChart;
