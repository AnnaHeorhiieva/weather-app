import React from "react";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";

import { render } from "utils/test-utils/render-with-providers";
import { storeFakeData } from "../../../tests/fake-data/store-fake-data";
import {
  cityQueriedSelectorMock,
  mockedReduxHooks,
} from "../../../tests/mocks/redux.mocks";

import SearchField from "./search-field";

const TYPED_CITY = "Oslo";

describe("SearchField Component", () => {
  beforeEach(() => {
    render(<SearchField />, storeFakeData);
    mockedReduxHooks(storeFakeData);
    cityQueriedSelectorMock(TYPED_CITY);
  });

  test("renders initially and input has focus on initial render", () => {
    const button = screen.getByRole("button");
    const input = screen.getByRole("textbox");

    expect(input).toHaveFocus();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("has correct display value after typing", () => {
    const input = screen.getByRole("textbox");

    userEvent.type(input, TYPED_CITY);

    expect(input).toHaveFocus();
    expect(input).toHaveDisplayValue(TYPED_CITY);
  });

  test("has no display value after clicking on submit button", () => {
    const button = screen.getByRole("button");
    const input = screen.getByRole("textbox");

    userEvent.type(input, TYPED_CITY);
    expect(input).toHaveDisplayValue(TYPED_CITY);

    userEvent.click(button);
    expect(input).toBeEmptyDOMElement();
  });

  test("has no display value after clicking on Enter", () => {
    const input = screen.getByRole("textbox");

    userEvent.type(input, TYPED_CITY);
    expect(input).toHaveDisplayValue(TYPED_CITY);

    userEvent.keyboard("[Enter]");
    expect(input).toBeEmptyDOMElement();
  });
});
