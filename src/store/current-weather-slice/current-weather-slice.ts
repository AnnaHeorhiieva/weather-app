import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "services/axios-service";
import { defaultCitiesDisplayed } from "utils/configs/default-cities-displayed";
import { getCachedState } from "utils/helpers/get-cashed-state";
import { configureCurrentApiUrl } from "utils/helpers/configure-api-url";

import {
  CityWeatherEntity,
  CurrentWeatherState,
} from "store/current-weather-slice/current-weather-slice.types";

const initialCurrentWeatherState = {
  citiesDisplayedWeather: defaultCitiesDisplayed,
  cityQueried: "",
  isRequestedCityExists: true,
};

export const currentWeatherState: CurrentWeatherState =
  getCachedState("currentWeather") || initialCurrentWeatherState;

export const getCurrentCityWeather = createAsyncThunk(
  "currentWeather/getCurrentCityWeather",
  async (cityName: string, { rejectWithValue }) => {
    try {
      const endpoint = configureCurrentApiUrl(cityName);
      const { data: cityWeatherObj } = await axios.get(endpoint);
      return cityWeatherObj as CityWeatherEntity;
    } catch (err: any) {
      const rejectionError = err.response.data;
      return rejectWithValue(rejectionError);
    }
  }
);

const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState: currentWeatherState,

  reducers: {
    removeCityWeather: (state, action: PayloadAction<string>) => {
      const cityName = action.payload;
      delete state.citiesDisplayedWeather[cityName];
      localStorage.setItem("currentWeather", JSON.stringify(state));
    },
    setCityQueried: (state, action: PayloadAction<string>) => {
      const cityName = action.payload;
      state.cityQueried = cityName;
      localStorage.setItem("currentWeather", JSON.stringify(state));
    },
    setIsRequestedCityExists: (state, action: PayloadAction<boolean>) => {
      const isRequestedCityExists = action.payload;
      state.isRequestedCityExists = isRequestedCityExists;
      localStorage.setItem("currentWeather", JSON.stringify(state));
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getCurrentCityWeather.fulfilled, (state, action) => {
      const cityWeatherObj = action.payload;
      const cityName = cityWeatherObj.name;
      state.citiesDisplayedWeather[cityName] = cityWeatherObj;
      localStorage.setItem("currentWeather", JSON.stringify(state));
    });
    builder.addCase(getCurrentCityWeather.rejected, (state, action: any) => {
      const { cod } = action.payload;
      if (cod === 429) state.isRequestedCityExists = true;
      else state.isRequestedCityExists = false;
      localStorage.setItem("currentWeather", JSON.stringify(state));
    });
  },
});

export const { removeCityWeather, setCityQueried, setIsRequestedCityExists } =
  currentWeatherSlice.actions;

export default currentWeatherSlice.reducer;
