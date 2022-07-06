import React from "react";
import { screen } from "@testing-library/react";

import * as transformWeather from "utils/helpers/transform-current-weather";
import { render } from "utils/test-utils/render-with-providers";
import {
  currentWeatherSelectorMock,
  mockedReduxHooks,
} from "../../../tests/mocks/redux.mocks";
import { currentWeatherFakeObj } from "../../../tests/fake-data/current-state-fake-data";
import { storeFakeData } from "../../../tests/fake-data/store-fake-data";
import { transformedWeatherObjFakeData } from "../../../tests/fake-data/transformed-weather-obj-fake-data";

import CityCard from "./city-card";

const CITY_NAME_PROPS = "Oslo";

describe("CityCard Component", () => {
  beforeEach(() => {
    render(<CityCard cityName={CITY_NAME_PROPS} />, storeFakeData);
    mockedReduxHooks(storeFakeData);
    currentWeatherSelectorMock(currentWeatherFakeObj);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("renders initially with all elements present", () => {
    const header = screen.getByTestId("city-card-header");
    const main = screen.getByTestId("city-card-main");
    const footer = screen.getByTestId("city-card-footer");

    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  test("renders all passed props", () => {
    const cityName = screen.queryByText(CITY_NAME_PROPS);

    expect(cityName).toBeInTheDocument();
  });

  test("renders all data retrieved from store and transformed through transformWeather", () => {
    jest
      .spyOn(transformWeather, "transformWeather")
      .mockReturnValue(transformedWeatherObjFakeData);

    const description = screen.queryByText("Few clouds");
    const temperature = screen.queryByText("19 °C");
    const humidity = screen.queryByText("49 %");
    const pressure = screen.queryByText("1008 hPa");
    const visibility = screen.queryByText("10 km");

    expect(description).toBeInTheDocument();
    expect(temperature).toBeInTheDocument();
    expect(humidity).toBeInTheDocument();
    expect(pressure).toBeInTheDocument();
    expect(visibility).toBeInTheDocument();
    expect(description).toHaveTextContent("Few clouds");
    expect(temperature).toHaveTextContent("19 °C");
    expect(humidity).toHaveTextContent("49 %");
    expect(pressure).toHaveTextContent("1008 hPa");
    expect(visibility).toHaveTextContent("10 km");
  });
});
