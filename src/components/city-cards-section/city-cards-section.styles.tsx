import styled from "styled-components";
import Container from "@mui/material/Container";

export const CityCardsWrapper = styled(Container)`
  && {
    display: flex;
    flex-basis: auto;
    width: 100%;
    height: inherit;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px 2%;
    background-color: #fff;

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: center;
      flex-wrap: nowrap;
    }

    @media (min-width: 1200px) {
      max-width: 100vw;
    }
  }
`;
