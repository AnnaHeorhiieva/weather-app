import { RootState } from "store/store";

import {
  CurrentWeatherState,
  CityWeatherEntities,
} from "store/current-weather-slice/current-weather-slice.types";
import * as reduxHooks from "store/redux-hooks";
import * as currentSelectors from "store/current-weather-slice/current-weather-selectors";

const mockDispatch = jest.fn();

export function useAppSelectorMock(state: RootState) {
  jest
    .spyOn(reduxHooks, "useAppSelector")
    .mockImplementation((selector) => selector(state));
}

export function useAppDispatchMock() {
  jest
    .spyOn(reduxHooks, "useAppDispatch")
    .mockReturnValue(() => mockDispatch());
}

export function mockedReduxHooks(state: RootState) {
  useAppSelectorMock(state);
  useAppDispatchMock();
}

export function currentStateSelectorMock(returnValue: CurrentWeatherState) {
  jest.spyOn(currentSelectors, "stateSelector").mockReturnValue(returnValue);
}

export function currentWeatherSelectorMock(returnValue: CityWeatherEntities) {
  jest
    .spyOn(currentSelectors, "currentWeatherSelector")
    .mockReturnValue(returnValue);
}

export function cityQueriedSelectorMock(returnValue: string) {
  jest
    .spyOn(currentSelectors, "cityQueriedSelector")
    .mockReturnValue(returnValue);
}

export function isRequestedCityExistsSelectorMock(returnValue: boolean) {
  jest
    .spyOn(currentSelectors, "isRequestedCityExistsSelector")
    .mockReturnValue(returnValue);
}
