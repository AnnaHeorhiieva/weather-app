import styled from "styled-components";
import Container from "@mui/material/Container";

export const DetailsPageSidebarHeader = styled(Container)`
  && {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    height: 22vh;
    padding: 0;

    @media (max-width: 860px) {
      height: 180px;

      a {
        height: 40px;
      }
    }

    @media (min-width: 1200px) {
      max-width: 100%;
    }
  }
`;

export const WeatherDetailsImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  object-fit: cover;
  color: #ffa03a;
`;

export const CityContainer = styled(Container)`
  && {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;

    @media (min-width: 1200px) {
      max-width: 100%;
    }
  }
`;

export const TemperatureContainer = styled(Container)`
  && {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;

    @media (min-width: 1200px) {
      max-width: 100%;
    }
  }
`;
