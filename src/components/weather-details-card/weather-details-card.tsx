import React from "react";

import { MUIIcon } from "utils/helpers/get-detailed-weather-data";

import BoldText from "mui-shared-components/bold-text/bold-text";
import {
  WeatherDetailsHeader,
  WeatherDetailsWrapper,
  WeatherDetailsValue,
} from "components/weather-details-card/weather-details-card.styles";

interface WeatherDetailsCardProps {
  detailName: string;
  detailValue: string;
  detailIcon: MUIIcon;
}

function WeatherDetailsCard({
  detailName,
  detailValue,
  detailIcon: DetailIcon,
}: WeatherDetailsCardProps): JSX.Element {
  return (
    <WeatherDetailsWrapper>
      <WeatherDetailsHeader>
        <DetailIcon />
        <BoldText color="#c7c8ce" fontSize="0.8">
          {detailName}
        </BoldText>
      </WeatherDetailsHeader>
      <WeatherDetailsValue>
        <BoldText color="#174456" fontSize="1.1">
          {detailValue}
        </BoldText>
      </WeatherDetailsValue>
    </WeatherDetailsWrapper>
  );
}

export default WeatherDetailsCard;
