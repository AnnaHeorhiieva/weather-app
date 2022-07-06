import { RootState } from "store/store";

import {
  CurrentWeatherState,
  CityWeatherEntities,
} from "store/current-weather-slice/current-weather-slice.types";

export function stateSelector(state: RootState): CurrentWeatherState {
  return state.currentWeather;
}
export function currentWeatherSelector(state: RootState): CityWeatherEntities {
  return state.currentWeather.citiesDisplayedWeather;
}

export function cityQueriedSelector(state: RootState) {
  return state.currentWeather.cityQueried;
}

export function isRequestedCityExistsSelector(state: RootState) {
  return state.currentWeather.isRequestedCityExists;
}
