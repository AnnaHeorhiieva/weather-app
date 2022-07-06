import React, { ReactElement } from "react";
import thunk from "redux-thunk";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";

function render(ui: ReactElement, initialState: {}, { ...options } = {}) {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);

  rtlRender(ui, {
    wrapper: ({ children }) => (
      <Provider store={store}>
        <Router>{children}</Router>
      </Provider>
    ),
    ...options,
  });
}

export * from "@testing-library/react";
export { render };
