import React from "react";

import { SidebarWeatherDetails } from "utils/helpers/get-detailed-weather-data";

import WeatherDetailsSidebarBlocks from "components/weather-details-sidebar-blocks/weather-details-sidebar-blocks";
import WeatherDetailsSidebarHeader from "components/weather-details-sidebar-header/weather-details-sidebar-header";
import { DetailsPageSidebar } from "components/weather-details-sidebar/weather-details-sidebar.styles";

interface WeatherDetailsSidebarProps {
  sidebarWeatherDetails: SidebarWeatherDetails;
}

function WeatherDetailsSidebar({
  sidebarWeatherDetails,
}: WeatherDetailsSidebarProps): JSX.Element {
  const { temperature, cityName, icon, description, timezone } =
    sidebarWeatherDetails;

  const detailsSidebarBlocks = sidebarWeatherDetails.sidebarBlocks;
  const sidebarBlocksArray = Object.entries(detailsSidebarBlocks);

  return (
    <DetailsPageSidebar>
      <WeatherDetailsSidebarHeader
        temperature={temperature}
        cityName={cityName}
        icon={icon}
        description={description}
        timezone={timezone}
      />
      <WeatherDetailsSidebarBlocks sidebarBlocksArray={sidebarBlocksArray} />
    </DetailsPageSidebar>
  );
}

export default WeatherDetailsSidebar;
