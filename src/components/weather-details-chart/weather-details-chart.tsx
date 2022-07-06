import React from "react";
import { useAppSelector } from "store/redux-hooks";

import { createDataX, createDataY } from "utils/helpers/configure-chart-data";
import { getCityTime } from "utils/helpers/configure-weather-data";
import {
  hourlySelector,
  timezoneSelector,
} from "store/hourly-weather-slice/hourly-weather-selectors";

import HourlyChart from "components/hourly-chart/hourly-chart";

function WeatherDetailsChart(): JSX.Element {
  const hourlyWeatherArray = useAppSelector((state) => hourlySelector(state));
  const weatherTimezoneNum = useAppSelector((state) => timezoneSelector(state));

  const currentLocalTimestamp = Date.now();
  const chartStartTime = getCityTime(currentLocalTimestamp, weatherTimezoneNum);
  const chartStartHours = Number(chartStartTime.slice(0, 2));

  const dataX = createDataX(chartStartHours);
  const dataY = createDataY(hourlyWeatherArray);

  return <HourlyChart dataX={dataX} dataY={dataY} />;
}

export default WeatherDetailsChart;
