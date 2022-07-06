import { CityWeatherEntity } from "store/current-weather-slice/current-weather-slice.types";
import { SvgIcon } from "@mui/material";

import { getImgUrl, getCityTime } from "utils/helpers/configure-weather-data";
import { transformStrategyObj } from "utils/configs/transform-strategy-object";
import { transformWeather } from "utils/helpers/transform-current-weather";

import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import CompressOutlinedIcon from "@mui/icons-material/CompressOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import InvertColorsOutlinedIcon from "@mui/icons-material/InvertColorsOutlined";
import GrassOutlinedIcon from "@mui/icons-material/GrassOutlined";
import SolarPowerOutlinedIcon from "@mui/icons-material/SolarPowerOutlined";
import StormOutlinedIcon from "@mui/icons-material/StormOutlined";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import TsunamiOutlinedIcon from "@mui/icons-material/TsunamiOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import WaterOutlinedIcon from "@mui/icons-material/WaterOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import WbTwilightOutlinedIcon from "@mui/icons-material/WbTwilightOutlined";

export type MUIIcon = typeof SvgIcon;

export interface SidebarBlocks {
  "Wind speed": [string, MUIIcon];
  "Wind gust": [string, MUIIcon];
  "Max temperature": [string, MUIIcon];
  "Min temperature": [string, MUIIcon];
  Sunrise: [string, MUIIcon];
  Sunset: [string, MUIIcon];
}

export interface MainWeatherDetails {
  "Feels like": [string, MUIIcon];
  Cloudiness: [string, MUIIcon];
  Visibility: [string, MUIIcon];
  Humidity: [string, MUIIcon];
  Pressure: [string, MUIIcon];
  "Rain Volume (for 1 hour)": [string, MUIIcon];
  "Snow Volume (for 1 hour)": [string, MUIIcon];
  "Sea Level": [string, MUIIcon];
  "Ground Level": [string, MUIIcon];
}

export interface SidebarWeatherDetails {
  cityName: string;
  temperature: string;
  description: string;
  timezone: number;
  icon: string;
  sidebarBlocks: SidebarBlocks;
}

export type AllWeatherData = MainWeatherDetails & SidebarBlocks;

export interface WeatherDetails {
  mainWeatherDetails: MainWeatherDetails;
  sidebarWeatherDetails: SidebarWeatherDetails;
  allWeatherData: AllWeatherData;
}

export function getDetailedWeatherData(cityWeather: CityWeatherEntity) {
  const modifiedWeather = transformWeather(cityWeather, transformStrategyObj);

  const { main, weather, sys, visibility, name, timezone } = modifiedWeather;
  const { wind, clouds, rain, snow } = modifiedWeather;

  const { humidity, pressure, sea_level, grnd_level } = main;
  const { temp, feels_like, temp_max, temp_min } = main;
  const { description, icon } = weather[0];
  const { sunrise, sunset } = sys;
  const { speed, gust } = wind;
  const cloudiness = clouds?.all;
  const rainVolume1h = rain?.["1h"];
  const snowVolume1h = snow?.["1h"];

  const sunriseSeconds = sunrise * 1000;
  const sunsetSeconds = sunset * 1000;
  const citySunriseTime = getCityTime(sunriseSeconds, timezone);
  const citySunsetTime = getCityTime(sunsetSeconds, timezone);

  const mainWeatherDetails = {
    "Feels like": [feels_like, WbSunnyOutlinedIcon],
    Cloudiness: [cloudiness, CloudOutlinedIcon],
    Visibility: [visibility, VisibilityOutlinedIcon],
    Humidity: [humidity, WaterOutlinedIcon],
    Pressure: [pressure, CompressOutlinedIcon],
    "Rain Volume (for 1 hour)": [rainVolume1h, InvertColorsOutlinedIcon],
    "Snow Volume (for 1 hour)": [snowVolume1h, AcUnitOutlinedIcon],
    "Sea Level": [sea_level, TsunamiOutlinedIcon],
    "Ground Level": [grnd_level, GrassOutlinedIcon],
  };

  const sidebarWeatherDetails = {
    cityName: name,
    temperature: temp,
    icon: getImgUrl(icon),
    description,
    timezone,
    sidebarBlocks: {
      "Max temperature": [temp_max, SolarPowerOutlinedIcon],
      "Min temperature": [temp_min, ThermostatOutlinedIcon],
      "Wind speed": [speed, AirOutlinedIcon],
      "Wind gust": [gust, StormOutlinedIcon],
      Sunrise: [citySunriseTime, WbSunnyOutlinedIcon],
      Sunset: [citySunsetTime, WbTwilightOutlinedIcon],
    },
  };

  const allWeatherData = {
    "Max temperature": [temp_max, SolarPowerOutlinedIcon],
    "Min temperature": [temp_min, ThermostatOutlinedIcon],
    "Wind speed": [speed, AirOutlinedIcon],
    "Wind gust": [gust, StormOutlinedIcon],
    Sunrise: [citySunriseTime, WbSunnyOutlinedIcon],
    Sunset: [citySunsetTime, WbTwilightOutlinedIcon],
    "Feels like": [feels_like, WbSunnyOutlinedIcon],
    Cloudiness: [cloudiness, CloudOutlinedIcon],
    Visibility: [visibility, VisibilityOutlinedIcon],
    Humidity: [humidity, WaterOutlinedIcon],
    Pressure: [pressure, CompressOutlinedIcon],
    "Rain Volume (for 1 hour)": [rainVolume1h, InvertColorsOutlinedIcon],
    "Snow Volume (for 1 hour)": [snowVolume1h, AcUnitOutlinedIcon],
    "Sea Level": [sea_level, TsunamiOutlinedIcon],
    "Ground Level": [grnd_level, GrassOutlinedIcon],
  };

  return {
    mainWeatherDetails,
    sidebarWeatherDetails,
    allWeatherData,
  } as WeatherDetails;
}
