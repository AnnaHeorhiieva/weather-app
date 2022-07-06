import styled from "styled-components";
import Card from "@mui/material/Card";

export const CityCardContainer = styled(Card)`
  && {
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1%;
    border-radius: 7px;
    box-shadow: -3px -3px 20px rgba(0, 0, 0, 0.071);

    @media (max-width: 600px) {
      height: 38%;
      width: 70%;
      margin: 20px 2%;
    }

    @media (min-width: 600px) and (max-width: 860px) {
      width: 40%;
      height: 45%;
      margin: 20px 5%;
    }

    @media (min-width: 860px) and (max-width: 1200px) {
      width: 28%;
      height: 40%;
      margin: 20px 2.66%;
    }

    @media (min-width: 1200px) {
      height: 35%;
      width: 21%;
      margin: 20px 2%;
    }
  }
`;
