import React from "react";
import { screen } from "@testing-library/react";

import { render } from "utils/test-utils/render-with-providers";
import { currentWeatherFakeObj } from "../../../tests/fake-data/current-state-fake-data";
import { storeFakeData } from "../../../tests/fake-data/store-fake-data";
import {
  currentWeatherSelectorMock,
  mockedReduxHooks,
} from "../../../tests/mocks/redux.mocks";

import CityCardSection from "./city-cards-section";

describe("CityCardSection Component", () => {
  beforeEach(() => {
    render(<CityCardSection />, storeFakeData);
    mockedReduxHooks(storeFakeData);
    currentWeatherSelectorMock(currentWeatherFakeObj);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("renders initially with all elements present", () => {
    const section = screen.getByTestId("city-cards-section");

    expect(section).toBeInTheDocument();
    expect(section.childElementCount).toEqual(8);
  });
});
