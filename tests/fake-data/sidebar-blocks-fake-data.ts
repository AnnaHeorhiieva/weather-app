import { MUIIcon } from "utils/helpers/get-detailed-weather-data";

import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import SolarPowerOutlinedIcon from "@mui/icons-material/SolarPowerOutlined";
import StormOutlinedIcon from "@mui/icons-material/StormOutlined";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import WbTwilightOutlinedIcon from "@mui/icons-material/WbTwilightOutlined";

export const sidebarBlocksFakeData: [string, [number | string, MUIIcon]][] = [
  ["Max temperature", ["28 °C", SolarPowerOutlinedIcon]],
  ["Min temperature", ["23 °C", ThermostatOutlinedIcon]],
  ["Wind speed", ["8 m/sec", AirOutlinedIcon]],
  ["Wind gust", ["4 m/sec", StormOutlinedIcon]],
  ["Sunrise", ["1656986001", WbSunnyOutlinedIcon]],
  ["Sunset", ["1657044674", WbTwilightOutlinedIcon]],
];
