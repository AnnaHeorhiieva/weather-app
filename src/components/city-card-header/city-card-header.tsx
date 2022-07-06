import React from "react";
import { useAppDispatch } from "store/redux-hooks";

import {
  getCurrentCityWeather,
  removeCityWeather,
} from "store/current-weather-slice/current-weather-slice";
import { getImgUrl } from "utils/helpers/configure-weather-data";

import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

import BoldText from "mui-shared-components/bold-text/bold-text";
import {
  CardButton,
  CardButtonsGroup,
  CardHeader,
  CardTitleGroup,
  WeatherImage,
} from "components/city-card-header/city-card-header.styles";

interface CityCardHeaderProps {
  cityName: string;
  icon: string;
}

type CardButtonClickEvent = React.MouseEvent<HTMLButtonElement>;

function CityCardHeader({ cityName, icon }: CityCardHeaderProps): JSX.Element {
  const dispatch = useAppDispatch();

  const imgUrl = getImgUrl(icon);

  const handleRefreshCityClick = (event: CardButtonClickEvent) => {
    event.stopPropagation();
    dispatch(getCurrentCityWeather(cityName));
  };

  const handleRemoveCityClick = (event: CardButtonClickEvent) => {
    event.stopPropagation();
    dispatch(removeCityWeather(cityName));
  };

  return (
    <CardHeader data-testid="city-card-header">
      <CardTitleGroup>
        <WeatherImage src={imgUrl} alt={icon} />
        <BoldText color="#174456" fontSize="0.9">
          {cityName}
        </BoldText>
      </CardTitleGroup>
      <CardButtonsGroup>
        <CardButton
          onClick={handleRefreshCityClick}
          data-testid={`refresh-city-button${cityName}`}
        >
          <CachedOutlinedIcon />
        </CardButton>
        <CardButton
          onClick={handleRemoveCityClick}
          data-testid={`remove-city-button${cityName}`}
        >
          <RemoveCircleOutlineOutlinedIcon />
        </CardButton>
      </CardButtonsGroup>
    </CardHeader>
  );
}

export default CityCardHeader;
