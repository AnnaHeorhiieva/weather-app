import React from "react";
import { Routes as RoutesWrapper, Route } from "react-router-dom";

import Spinner from "components/spinner/spinner";
import MainPage from "pages/main-page/main-page";
import MainPageLayout from "layouts/main-page-layout/main-page-layout";

const LazyDetailsPage = React.lazy(
  () => import("pages/city-weather-details-page/city-weather-details-page")
);

function Routes() {
  return (
    <RoutesWrapper>
      <Route element={<MainPageLayout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
      <Route
        path="/:cityName"
        element={
          <React.Suspense fallback={<Spinner />}>
            <LazyDetailsPage />
          </React.Suspense>
        }
      />
    </RoutesWrapper>
  );
}

export default Routes;
