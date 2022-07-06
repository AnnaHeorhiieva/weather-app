import { configureStore } from "@reduxjs/toolkit";

import currentWeatherReducer from "store/current-weather-slice/current-weather-slice";
import hourlyWeatherReducer from "store/hourly-weather-slice/hourly-weather-slice";

export const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
    hourlyWeather: hourlyWeatherReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
