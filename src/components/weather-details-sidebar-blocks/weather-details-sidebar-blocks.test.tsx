import React from "react";
import { screen } from "@testing-library/react";

import { render } from "utils/test-utils/render-with-providers";
import { sidebarBlocksFakeData } from "../../../tests/fake-data/sidebar-blocks-fake-data";
import { storeFakeData } from "../../../tests/fake-data/store-fake-data";

import WeatherDetailsSidebarBlocks from "./weather-details-sidebar-blocks";

describe("WeatherDetailsSidebarBlocks Component", () => {
  beforeEach(() => {
    render(
      <WeatherDetailsSidebarBlocks
        sidebarBlocksArray={sidebarBlocksFakeData}
      />,
      storeFakeData
    );
  });

  test("renders initially all 6 weather details blocks with data", () => {
    sidebarBlocksFakeData.map((arr) => {
      return expect(screen.getByText(arr[0])).toBeInTheDocument();
    });

    sidebarBlocksFakeData.map((arr) => {
      return expect(screen.getByText(arr[1][0])).toBeInTheDocument();
    });

    const sidebarBlocks = screen.getByTestId("sidebar-blocks");
    const { childElementCount } = sidebarBlocks;

    expect(childElementCount).toBe(6);
  });
});
