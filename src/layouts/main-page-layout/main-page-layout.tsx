import React from "react";
import { Outlet } from "react-router-dom";

import SearchField from "components/search-field/search-field";
import {
  MainPageLayoutChildren,
  MainPageLayoutWrapper,
} from "layouts/main-page-layout/main-page-layout.styles";

function MainPageLayout(): JSX.Element {
  return (
    <MainPageLayoutWrapper>
      <SearchField />
      <MainPageLayoutChildren>
        <Outlet />
      </MainPageLayoutChildren>
    </MainPageLayoutWrapper>
  );
}

export default MainPageLayout;
