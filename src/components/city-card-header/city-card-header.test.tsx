import React from "react";
import { screen } from "@testing-library/react";

import { render } from "utils/test-utils/render-with-providers";
import { storeFakeData } from "../../../tests/fake-data/store-fake-data";

import CityCardHeader from "./city-card-header";

const CITY_NAME = "Oslo";
const ICON = "02d";

describe("CityCardHeader Component", () => {
  beforeEach(() => {
    render(<CityCardHeader cityName={CITY_NAME} icon={ICON} />, storeFakeData);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("renders initially with all data and elements present", () => {
    const image = screen.getByAltText(ICON);
    const cityName = screen.getByText(CITY_NAME);
    const removeButton = screen.getByTestId(`remove-city-button${CITY_NAME}`);
    const refreshButton = screen.getByTestId(`refresh-city-button${CITY_NAME}`);

    expect(image).toBeInTheDocument();
    expect(cityName).toBeInTheDocument();
    expect(removeButton).toBeInTheDocument();
    expect(refreshButton).toBeInTheDocument();
  });
});
