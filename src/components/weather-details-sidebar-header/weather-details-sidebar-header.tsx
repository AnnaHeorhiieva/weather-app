import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";

import {
  capitalizeDescription,
  getCityTime,
} from "utils/helpers/configure-weather-data";

import BoldText from "mui-shared-components/bold-text/bold-text";
import {
  CityContainer,
  DetailsPageSidebarHeader,
  TemperatureContainer,
  WeatherDetailsImage,
} from "components/weather-details-sidebar-header/weather-details-sidebar-header.styles";

interface SidebarHeaderProps {
  temperature: string;
  cityName: string;
  icon: string;
  description: string;
  timezone: number;
}

function WeatherDetailsSidebarHeader({
  temperature,
  cityName,
  icon,
  description,
  timezone,
}: SidebarHeaderProps): JSX.Element {
  const isLowerThan860px = useMediaQuery("(max-width:860px)");

  const currentLocalTimestamp = Date.now();
  const cityTime = getCityTime(currentLocalTimestamp, timezone);

  const capitalisedDescription = capitalizeDescription(description);

  return (
    <DetailsPageSidebarHeader>
      {isLowerThan860px ? (
        <Link to="/">
          <BoldText color="#fff" fontSize="1">
            Back to Main
          </BoldText>
        </Link>
      ) : null}
      <CityContainer>
        <BoldText color="#ffa03a" fontSize="1.5">
          {cityName}
        </BoldText>
        <BoldText color="#ffa03a" fontSize="1.5">
          {cityTime}
        </BoldText>
      </CityContainer>
      <WeatherDetailsImage src={icon} />
      <TemperatureContainer>
        <BoldText color="#fff" fontSize="1.6">
          {temperature}
        </BoldText>
        <BoldText color="#fff" fontSize="1.2">
          {capitalisedDescription}
        </BoldText>
      </TemperatureContainer>
    </DetailsPageSidebarHeader>
  );
}

export default WeatherDetailsSidebarHeader;
