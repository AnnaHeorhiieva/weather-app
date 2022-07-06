import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  HourlyCityWeather,
  HourlyWeatherState,
} from "store/hourly-weather-slice/hourly-weather-slice.types";

import axios from "services/axios-service";
import {
  Coordinates,
  configureHourlyApiUrl,
} from "utils/helpers/configure-api-url";
import { getCachedState } from "utils/helpers/get-cashed-state";

const initialHourlyWeather = {
  hourlyCityWeather: {} as HourlyCityWeather,
};

export const hourlyWeatherState: HourlyWeatherState =
  getCachedState("hourlyWeather") || initialHourlyWeather;

export const getHourlyCityWeather = createAsyncThunk(
  "hourlyWeather/getHourlyCityWeather",
  async (coord: Coordinates, { rejectWithValue }) => {
    try {
      const endpoint = configureHourlyApiUrl(coord);
      const { data: hourlyWeatherObject } = await axios.get(endpoint);
      const twoDaysHourlyWeather = hourlyWeatherObject.hourly;
      const perDiemHourlyWeather = twoDaysHourlyWeather.slice(0, 24);
      hourlyWeatherObject.hourly = perDiemHourlyWeather;
      return hourlyWeatherObject as HourlyCityWeather;
    } catch (err: any) {
      const rejectionError = err.response.data;
      return rejectWithValue(rejectionError);
    }
  }
);

const hourlyWeatherSlice = createSlice({
  name: "hourlyWeather",
  initialState: hourlyWeatherState,

  reducers: {
    resetHourlyCityWeather: (state) => {
      state.hourlyCityWeather = {} as HourlyCityWeather;
      localStorage.setItem("hourlyWeather", JSON.stringify(state));
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getHourlyCityWeather.fulfilled, (state, action) => {
      const hourlyWeatherObject = action.payload;
      state.hourlyCityWeather = hourlyWeatherObject;
      localStorage.setItem("hourlyWeather", JSON.stringify(state));
    });
  },
});

export const { resetHourlyCityWeather } = hourlyWeatherSlice.actions;

export default hourlyWeatherSlice.reducer;
