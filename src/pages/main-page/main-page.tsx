import React from "react";
import { useAppDispatch, useAppSelector } from "store/redux-hooks";

import { isRequestedCityExistsSelector } from "store/current-weather-slice/current-weather-selectors";
import { setIsRequestedCityExists } from "store/current-weather-slice/current-weather-slice";

import Alert from "mui-shared-components/alert/alert";
import CityCardsSection from "components/city-cards-section/city-cards-section";

const CITY_NOT_EXISTS_MESSAGE = "Requested city does not exist";

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const isRequestedCityExists = useAppSelector((state) =>
    isRequestedCityExistsSelector(state)
  );

  const closeAlert = () => dispatch(setIsRequestedCityExists(true));

  return (
    <>
      <CityCardsSection />
      <Alert
        isOpened={!isRequestedCityExists}
        handleCloseCallback={closeAlert}
        message={CITY_NOT_EXISTS_MESSAGE}
      />
    </>
  );
}

export default MainPage;
