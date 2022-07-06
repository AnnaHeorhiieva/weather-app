import styled from "styled-components";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";

export const WeatherDetailsWrapper = styled(Card)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 28%;
    height: 30%;
    box-shadow: none;
    background-color: #c5c5cd21;
    border-radius: 8px;
    padding: 20px;

    :hover {
      background-color: #acacb32b;
    }

    svg {
      font-size: 1.2rem;
      color: #ffa03a;
      margin-right: 15px;
    }

    @media (max-width: 430px) {
      width: 95%;
      height: 23%;
      margin: 12px 1%;
    }

    @media (min-width: 430px) and (max-width: 600px) {
      width: 38%;
      height: 100px;
      margin: 12px 5%;
    }

    @media (min-width: 600px) and (max-width: 860px) {
      width: 21%;
      height: 17%;
      margin: 12px 2%;

      p {
        :first-child {
          font-size: 0.8rem;
        }
        :nth-child(2) {
          font-size: 0.5rem;
        }
      }
    }
  }
`;

export const WeatherDetailsHeader = styled(Container)`
  && {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 40%;
    padding: 0;

    @media (min-width: 1200px) {
      max-width: none;
    }
  }
`;

export const WeatherDetailsValue = styled(Container)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 60%;
    padding: 0;

    @media (min-width: 1200px) {
      max-width: none;
    }
  }
`;
