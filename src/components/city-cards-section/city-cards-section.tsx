import React from "react";
import { useAppSelector } from "store/redux-hooks";

import { currentWeatherSelector } from "store/current-weather-slice/current-weather-selectors";

import CityCard from "components/city-card/city-card";
import { CityCardsWrapper } from "components/city-cards-section/city-cards-section.styles";

function CityCardsSection(): JSX.Element {
  const citiesObj = useAppSelector((state) => currentWeatherSelector(state));
  const citiesArray = Object.keys(citiesObj).reverse();

  const renderCityCards = citiesArray.map((cityName) => (
    <CityCard cityName={cityName} key={cityName} />
  ));

  return (
    <CityCardsWrapper data-testid="city-cards-section">
      {renderCityCards}
    </CityCardsWrapper>
  );
}

export default CityCardsSection;
