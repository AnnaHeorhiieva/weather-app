import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/redux-hooks";

import { currentWeatherSelector } from "store/current-weather-slice/current-weather-selectors";
import { getCurrentCityWeather } from "store/current-weather-slice/current-weather-slice";
import {
  getHourlyCityWeather,
  resetHourlyCityWeather,
} from "store/hourly-weather-slice/hourly-weather-slice";
import { getDetailedWeatherData } from "utils/helpers/get-detailed-weather-data";
import { useIsMounted } from "hooks/use-is-mounted";

import WeatherDetailsMain from "components/weather-details-main/weather-details-main";
import WeatherDetailsSidebar from "components/weather-details-sidebar/weather-details-sidebar";
import { DetailsPageContainer } from "pages/city-weather-details-page/city-weather-details-page.styles";

function CityWeatherDetailsPage(): JSX.Element {
  const mounted = useIsMounted();

  const dispatch = useAppDispatch();
  const currWeather = useAppSelector((state) => currentWeatherSelector(state));

  const { cityName } = useParams() as { cityName: string };
  const cityWeather = currWeather[cityName];
  const cityCoordinates = cityWeather?.coord;

  const weatherData = getDetailedWeatherData(cityWeather);
  const { mainWeatherDetails, sidebarWeatherDetails, allWeatherData } =
    weatherData;

  useEffect(() => {
    dispatch(getCurrentCityWeather(cityName));
    dispatch(getHourlyCityWeather(cityCoordinates));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(
    () => () => {
      if (mounted() === false) dispatch(resetHourlyCityWeather());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mounted]
  );

  return (
    <DetailsPageContainer>
      <WeatherDetailsMain
        mainWeatherDetails={mainWeatherDetails}
        allWeatherData={allWeatherData}
      />
      <WeatherDetailsSidebar sidebarWeatherDetails={sidebarWeatherDetails} />
    </DetailsPageContainer>
  );
}

export default CityWeatherDetailsPage;
