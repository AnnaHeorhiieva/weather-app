import { RootState } from "store/store";

import { HourlyWeatherEntities } from "store/hourly-weather-slice/hourly-weather-slice.types";

export function timezoneSelector(state: RootState): number {
  return state.hourlyWeather.hourlyCityWeather.timezone_offset;
}

export function hourlySelector(state: RootState): HourlyWeatherEntities {
  return state.hourlyWeather.hourlyCityWeather.hourly;
}
