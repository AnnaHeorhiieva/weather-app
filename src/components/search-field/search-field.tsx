import React from "react";
import { useAppDispatch, useAppSelector } from "store/redux-hooks";

import {
  getCurrentCityWeather,
  setCityQueried,
} from "store/current-weather-slice/current-weather-slice";
import { cityQueriedSelector } from "store/current-weather-slice/current-weather-selectors";

import TravelExploreOutlinedIcon from "@mui/icons-material/TravelExploreOutlined";
import {
  additionalStyle,
  SearchButton,
  SearchButtonWrapper,
  SearchFieldWrapper,
  SearchInputWrapper,
  SearchInput,
} from "components/search-field/search-field.styles";

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
type EnterClickEvent = React.KeyboardEvent<HTMLInputElement>;

const CITY_QUERIED_DEFAULT = "";
const PLACEHOLDER = "Search weather by city...";

function SearchField(): JSX.Element {
  const dispatch = useAppDispatch();

  const cityQueried = useAppSelector((state) => cityQueriedSelector(state));

  const handleSearchInputChange = (event: InputChangeEvent) => {
    const citySearched = event.target.value;
    dispatch(setCityQueried(citySearched));
  };

  const handleSearchButtonClick = () => {
    dispatch(getCurrentCityWeather(cityQueried));
    dispatch(setCityQueried(CITY_QUERIED_DEFAULT));
  };

  const handleEnterClick = (event: EnterClickEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearchButtonClick();
    }
  };

  return (
    <SearchFieldWrapper>
      <SearchInputWrapper>
        <SearchInput
          autoFocus
          inputProps={{ sx: additionalStyle }}
          onChange={handleSearchInputChange}
          onKeyDown={handleEnterClick}
          placeholder={PLACEHOLDER}
          value={cityQueried}
        />
        <SearchButtonWrapper>
          <SearchButton onClick={handleSearchButtonClick}>
            <TravelExploreOutlinedIcon />
          </SearchButton>
        </SearchButtonWrapper>
      </SearchInputWrapper>
    </SearchFieldWrapper>
  );
}

export default SearchField;
