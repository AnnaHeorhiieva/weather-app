import React from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

import {
  MainWeatherDetails,
  AllWeatherData,
} from "utils/helpers/get-detailed-weather-data";

import BoldText from "mui-shared-components/bold-text/bold-text";
import WeatherDetailsCard from "components/weather-details-card/weather-details-card";
import WeatherDetailsChart from "components/weather-details-chart/weather-details-chart";
import {
  DetailsPageMain,
  HourlyChartSection,
  LinkSection,
  WeatherDetailsSection,
} from "components/weather-details-main/weather-details-main.styles";

interface WeatherDetailsMainPorps {
  mainWeatherDetails: MainWeatherDetails;
  allWeatherData: AllWeatherData;
}

const NO_DATA = "No data";

function WeatherDetailsMain({
  mainWeatherDetails,
  allWeatherData,
}: WeatherDetailsMainPorps): JSX.Element {
  const isLowerThan860px = useMediaQuery("(max-width:860px)");

  const weatherData = isLowerThan860px ? allWeatherData : mainWeatherDetails;
  const mainDetailsArray = Object.entries(weatherData);

  const renderWeatherDetailsCards = mainDetailsArray.map(
    ([detailName, detailData]) => {
      const [detailValue = NO_DATA, detailIcon] = detailData;
      return (
        <WeatherDetailsCard
          key={detailName}
          detailName={detailName}
          detailValue={detailValue}
          detailIcon={detailIcon}
        />
      );
    }
  );

  return (
    <DetailsPageMain>
      <LinkSection>
        <Link to="/">
          <BoldText color="#0e193b" fontSize="0.8">
            Back to Main
          </BoldText>
        </Link>
      </LinkSection>
      <WeatherDetailsSection>{renderWeatherDetailsCards}</WeatherDetailsSection>
      <HourlyChartSection>
        <WeatherDetailsChart />
      </HourlyChartSection>
    </DetailsPageMain>
  );
}

export default WeatherDetailsMain;
