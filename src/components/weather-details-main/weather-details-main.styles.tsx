import styled from "styled-components";
import Container from "@mui/material/Container";

export const DetailsPageMain = styled(Container)`
  && {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 65%;
    height: 100vh;
    padding: 0;

    @media (max-width: 600px) {
      width: 100%;
      height: inherit;
    }

    @media (min-width: 600px) and (max-width: 860px) {
      width: 100%;
    }

    @media (min-width: 1200px) {
      max-width: 65%;
    }
  }
`;

export const LinkSection = styled(Container)`
  && {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 6vh;
    padding: 0 5%;

    @media (max-width: 860px) {
      display: none;
    }

    @media (min-width: 1200px) {
      max-width: 100%;
    }
  }
`;

export const WeatherDetailsSection = styled(Container)`
  && {
    display: flex;
    background-color: #fff;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 55vh;
    padding: 3% 5%;

    @media (max-width: 860px) {
      height: 100%;
      justify-content: center;
    }

    @media (min-width: 1200px) {
      max-width: 100%;
    }
  }
`;

export const HourlyChartSection = styled(Container)`
  && {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 39vh;
    padding: 1% 5%;

    @media (max-width: 860px) {
      display: none;
    }

    @media (min-width: 860px) and (max-width: 1200px) {
      align-items: center;
    }

    @media (min-width: 1200px) {
      max-width: 100%;
    }
  }
`;
