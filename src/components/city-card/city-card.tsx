import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/redux-hooks";
import { useNavigate } from "react-router-dom";

import { transformStrategyObj } from "utils/configs/transform-strategy-object";
import { capitalizeDescription } from "utils/helpers/configure-weather-data";
import { createRouteName } from "utils/helpers/create-route-name";
import { transformWeather } from "utils/helpers/transform-current-weather";
import { getCurrentCityWeather } from "store/current-weather-slice/current-weather-slice";
import { currentWeatherSelector } from "store/current-weather-slice/current-weather-selectors";

import CityCardFooter from "components/city-card-footer/city-card-footer";
import CityCardHeader from "components/city-card-header/city-card-header";
import CityCardMain from "components/city-card-main/city-card-main";
import { CityCardContainer } from "components/city-card/city-card.styles";

interface CityCardProps {
  cityName: string;
}

function CityCard({ cityName }: CityCardProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const currWeather = useAppSelector((state) => currentWeatherSelector(state));
  const weatherObj = currWeather[cityName];

  const transformedWeather = transformWeather(weatherObj, transformStrategyObj);
  const { id, weather, main, visibility } = transformedWeather;
  const { temp, humidity, pressure } = main;
  const { description, icon } = weather[0];

  const capitalisedDescription = capitalizeDescription(description);

  const handleCardClick = () => navigate(createRouteName(cityName));

  useEffect(() => {
    dispatch(getCurrentCityWeather(cityName));
  }, [cityName, dispatch]);

  return (
    <CityCardContainer key={id} onClick={handleCardClick}>
      <CityCardHeader cityName={cityName} icon={icon} />
      <CityCardMain description={capitalisedDescription} temperature={temp} />
      <CityCardFooter
        humidity={humidity}
        pressure={pressure}
        visibility={visibility}
      />
    </CityCardContainer>
  );
}

export default CityCard;
